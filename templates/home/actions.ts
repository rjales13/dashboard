"use server";

import { prisma } from "@/lib/prisma";

type fechamentoType = "consultorio" | "dentista";

interface iGetSumEntradasProps {
  idEntrada?: string;
  idConsultorioOrDentista?: string;
  type?: fechamentoType;
  fechamentoId?: string;
}

interface iFechamentoProps {
  id?: string;
}

const WHERE_SERVICOS = {
  some: {
    OR: [
      {
        fechamento: null,
      },
      { fechamento: { isSet: false } },
    ],
    AND: [
      {
        entregue: true,
      },
    ],
  },
};

async function getSumEntradas({
  idEntrada,
  idConsultorioOrDentista,
  type,
  fechamentoId,
}: iGetSumEntradasProps = {}) {
  const PATH = "entrada";
  const dataPrismaEntrada = prisma.entrada;

  const addWhere = idEntrada
    ? {
        id: { equals: idEntrada },
      }
    : idConsultorioOrDentista && type
      ? {
          [type]: { equals: idConsultorioOrDentista },
        }
      : {};

  try {
    const entradas = await dataPrismaEntrada.findMany({
      select: {
        servicos: {
          select: {
            desconto: true,
            valor: true,
            repeticao: true,
            quantidade: true,
            entregue: true,
            fechamento: true,
          },
        },
      },
      where: {
        ...(!fechamentoId && { servicos: WHERE_SERVICOS }),
        ...addWhere,
      },
    });

    const total = entradas.reduce((acc, entrada) => {
      const valorTotal = entrada.servicos
        .filter(
          (servico) =>
            servico.entregue === true &&
            (!fechamentoId
              ? !servico.fechamento
              : servico.fechamento === fechamentoId),
        )
        .reduce((total, servico) => {
          const valorComDesconto =
            (servico.valor / 100) *
              servico.quantidade *
              (1 - servico.repeticao / 100) -
            servico.desconto / 100;
          return total + valorComDesconto;
        }, 0);
      return acc + valorTotal;
    }, 0);

    return total || 0;
  } catch (error) {
    console.error(`Error getting ${PATH}:`, error);
    throw new Error(`Error getting ${PATH}.`);
  }
}

async function getSumDiscount({ id }: iFechamentoProps) {
  const PATH = "fechamento";
  const dataPrisma = prisma.fechamento;
  try {
    const fechamento = await dataPrisma.findUnique({
      select: {
        adicional_consultorio: true,
        adicional_dentista: true,
      },
      where: {
        id,
      },
    });

    if (!fechamento) return 0;

    const discountConsultorio = fechamento.adicional_consultorio.reduce(
      (total, item) =>
        total + item.desconto.reduce((subTotal, value) => subTotal + value, 0),
      0,
    );

    const discountDentista = fechamento.adicional_dentista.reduce(
      (total, item) =>
        total + item.desconto.reduce((subTotal, value) => subTotal + value, 0),
      0,
    );

    return (discountConsultorio + discountDentista) / 100 || 0;
  } catch (error) {
    console.error(`Error getting ${PATH}:`, error);
    throw new Error(`Error getting ${PATH}.`);
  }
}

export async function getFechamentos(year: number) {
  const PATH = "fechamento";
  const dataPrisma = prisma.fechamento;
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  try {
    const fechamentos = await dataPrisma.findMany({
      select: {
        id: true,
        fechado: true,
        valor: true,
        data: true,
      },
      where: {
        data: {
          gte: new Date(`${year}-01-01T00:00:00.000Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00.000Z`),
        },
        fechado: true,
      },
      orderBy: { data: "desc" },
    });

    if (currentYear !== year && !fechamentos.length) return [];

    const newFechamentos = await Promise.all(
      fechamentos.map(async (fechamento) => {
        const discount = await getSumDiscount({ id: fechamento.id });
        return {
          ...fechamento,
          valor: fechamento.valor - discount,
        };
      }),
    );

    if (currentYear !== year && fechamentos.length) return newFechamentos;

    const sumEntradas = await getSumEntradas();

    if (currentMonth === 1)
      return [
        {
          id: "01" + year.toString(),
          data: new Date(Date.UTC(year, 0, 1)),
          fechado: false,
          valor: sumEntradas,
        },
      ];

    const getLastMonthClosed = fechamentos.length
      ? fechamentos[0]?.data.getUTCMonth() + 1
      : currentMonth - 1;
    const date = new Date(Date.UTC(year, getLastMonthClosed, 1));

    const monthString = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const monthOpened = [
      {
        id: monthString + year.toString(),
        data: date,
        fechado: false,
        valor: sumEntradas,
      },
    ];

    return [...monthOpened, ...newFechamentos];
  } catch (error) {
    console.error(`Error getting ${PATH}:`, error);
    throw new Error(`Error getting ${PATH}.`);
  }
}
