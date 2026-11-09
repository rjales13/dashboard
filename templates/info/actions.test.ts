import { fetchPosts } from "./actions";

describe("fetchPosts", () => {
  it("delegates to fetchPostsFromAPI", async () => {
    // This server action just delegates to the shared utility.
    // We test the actual behavior via the shared utility's own tests.
    // This test ensures the wrapper function works.
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              userId: 1,
              id: 1,
              title: "Test Post",
              body: "Test body",
            },
          ]),
      }),
    ) as jest.Mock;

    const result = await fetchPosts();

    expect(result).toHaveLength(1);
    expect(result[0].body).toBe("Test body");
  });
});
