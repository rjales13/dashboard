import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { type PropsWithChildren } from "react";
import { getFechamentos } from "./actions";
import { HomeTemplate } from "./index";

jest.mock("./actions", () => ({
  getFechamentos: jest.fn(),
}));

const originalFetch = Object.getOwnPropertyDescriptor(globalThis, "fetch");

describe("HomeTemplate", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "fetch", {
      configurable: true,
      value: jest.fn().mockResolvedValue({
        json: () => Promise.resolve([]),
      }),
    });

    jest.mocked(getFechamentos).mockResolvedValue([
      {
        id: "04-2026",
        data: new Date("2026-04-01T00:00:00.000Z"),
        fechado: false,
        valor: 100,
      },
      {
        id: "03-2026",
        data: new Date("2026-03-01T00:00:00.000Z"),
        fechado: true,
        valor: 200,
      },
      {
        id: "02-2026",
        data: new Date("2026-02-01T00:00:00.000Z"),
        fechado: true,
        valor: 300,
      },
      {
        id: "01-2026",
        data: new Date("2026-01-01T00:00:00.000Z"),
        fechado: true,
        valor: 400,
      },
    ]);
  });

  afterAll(() => {
    if (originalFetch) {
      Object.defineProperty(globalThis, "fetch", originalFetch);
    } else {
      Reflect.deleteProperty(globalThis, "fetch");
    }
  });

  it("shows monthly values and estimates an amount when an open month is selected", async () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    render(<HomeTemplate />, { wrapper });

    expect(await screen.findByText("Monthly overview")).toBeInTheDocument();
    expect(screen.getByText(/200,00/)).toBeInTheDocument();
    expect(screen.getByText(/300,00/)).toBeInTheDocument();
    expect(screen.getByText(/400,00/)).toBeInTheDocument();

    fireEvent.click(screen.getByText("April"));

    expect(await screen.findByText(/500,00/)).toBeInTheDocument();
  });
});
