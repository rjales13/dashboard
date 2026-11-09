import { render, screen } from "@testing-library/react";
import { TableList } from "./table";

describe("TableList", () => {
  it("shows each supplied user row under its column heading", () => {
    render(
      <TableList
        data={[
          {
            userId: 7,
            id: 12,
            title: "Profile title",
            body: "Profile details",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("columnheader", { name: "User" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Id" }),
    ).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("Profile title")).toBeInTheDocument();
    expect(screen.getByText("Profile details")).toBeInTheDocument();
  });
});
