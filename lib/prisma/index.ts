import { PrismaClient } from '@/generated/prisma';

export const prisma = new PrismaClient();

export type ModelKey =
  | 'especialidade'
  | 'dentista'
  | 'secretaria'
  | 'consultorio'
  | 'funcao'
  | 'funcionario'
  | 'servico'
  | 'entrada'
  | 'roteiro'
  | 'fechamento'
  | 'valores';
