"use client";

import { useQuery } from "@tanstack/react-query";
import { getFechamentos } from "./actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currencyFormatter } from "@/lib/utils/currencyFormatter";
import { cn } from "cn";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartBarDefault } from "./charts";
import { useEffect, useMemo, useState } from "react";
import { TableList } from "./table";
import { hasDigit } from "@/lib/utils/hasDigit";
import { iTableList } from "@/models/tableList";
import Link from "next/link";

export const HomeTemplate = () => {
  const [discover, setDiscover] = useState<string>("Open");
  const [posts, setPosts] = useState<iTableList[]>([]);

  const { data = [], isLoading } = useQuery({
    queryKey: ["fechamento"],
    queryFn: async () => await getFechamentos(new Date().getFullYear()),
  });

  const chartData = useMemo(
    () =>
      data
        .filter(({ valor }) => valor > 0)
        .map(({ data, valor }) => {
          return {
            month: data.toLocaleString("en-US", {
              month: "long",
              timeZone: "UTC",
            }),
            monthValue: valor,
          };
        }),
    [data],
  );

  const estimateValue = (status: boolean) => {
    if (status) return;

    const n = data.length;
    const xs = data.map((_, i) => i + 1);
    const ys = data.map((d) => d.valor);

    const sumX = xs.reduce((a, b) => a + b, 0);
    const sumY = ys.reduce((a, b) => a + b, 0);
    const sumXY = xs.reduce((a, x, i) => a + x * ys[i], 0);
    const sumX2 = xs.reduce((a, x) => a + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const nextX = n + 1;
    const finalValue = currencyFormatter.format(slope * nextX + intercept);

    setDiscover(finalValue);
  };

  useEffect(() => {
    if (!hasDigit(discover)) return;

    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15",
          { signal: controller.signal },
        );
        const arrPosts = await res.json();
        setPosts(arrPosts);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }

    load();

    return () => controller.abort();
  }, [discover]);

  if (isLoading)
    return (
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-80 max-w-full" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-28 w-full" />
          ))}
        </div>
      </div>
    );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Dashboard</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Monthly overview
        </h1>
        <p className="text-sm text-muted-foreground">
          Select an open month to estimate its value.
        </p>
      </header>

      <section
        aria-label="Monthly values"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {data.map(({ id, fechado: status, valor: value, data: date }) => {
          return (
            <Card
              key={id}
              onClick={() => estimateValue(status)}
              className={cn(
                "min-w-0 transition-all hover:-translate-y-0.5 hover:shadow-md",
                !status
                  ? "cursor-pointer border-dashed opacity-70 hover:border-solid hover:opacity-100"
                  : "",
              )}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-1">
                <CardTitle className="text-base font-medium capitalize text-muted-foreground">
                  {date.toLocaleString("en-US", {
                    month: "long",
                    timeZone: "UTC",
                  })}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold tracking-tight">
                    {status ? currencyFormatter.format(value) : discover}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section
        aria-label="Dashboard details"
        className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2"
      >
        <ChartBarDefault chartData={chartData} />
        {posts.length > 0 && <TableList data={posts} />}
      </section>
      <Link
        href="/info"
        className="text-blue-500 transition hover:opacity-70 flex justify-end text-lg font-bold"
      >
        to Info
      </Link>
    </div>
  );
};
