import { render, screen } from "@testing-library/react";
import { ChartBarDefault } from "./charts";

describe("ChartBarDefault", () => {
  it("shows the range covered by the supplied months", () => {
    render(
      <ChartBarDefault
        chartData={[
          { month: "March", monthValue: 300 },
          { month: "January", monthValue: 100 },
        ]}
      />,
    );

    expect(screen.getByText("Bar Chart")).toBeInTheDocument();
    expect(screen.getByText(/January - March/)).toBeInTheDocument();
  });
});
