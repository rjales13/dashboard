import { render, screen } from "@testing-library/react";
import { InfoDisplay } from "./display";
import { iTableList } from "@/models/tableList";

describe("InfoDisplay", () => {
  const mockPosts: iTableList[] = [
    {
      userId: 1,
      id: 1,
      title: "First Post",
      body: "First body",
    },
    {
      userId: 1,
      id: 2,
      title: "Second Post",
      body: "Second body",
    },
  ];

  it("renders posts in a single semantic list", () => {
    render(<InfoDisplay posts={mockPosts} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("First body");
    expect(items[1]).toHaveTextContent("Second body");
  });

  it("renders a link back to home", () => {
    render(<InfoDisplay posts={mockPosts} />);

    const link = screen.getByRole("link", { name: /to Dash/i });
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders empty list when no posts provided", () => {
    render(<InfoDisplay posts={[]} />);

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});
