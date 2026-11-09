import { fetchPostsFromAPI } from "./fetchPosts";

describe("fetchPostsFromAPI", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("validates and returns posts from the API", async () => {
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

    const result = await fetchPostsFromAPI();

    expect(result).toEqual([
      {
        userId: 1,
        id: 1,
        title: "Test Post",
        body: "Test body",
      },
    ]);
  });

  it("throws when response status is not ok", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      }),
    ) as jest.Mock;

    await expect(fetchPostsFromAPI()).rejects.toThrow("Failed to fetch posts");
  });

  it("throws when JSON is missing required fields", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              userId: 1,
              id: 1,
              title: "Test Post",
              // missing body
            },
          ]),
      }),
    ) as jest.Mock;

    await expect(fetchPostsFromAPI()).rejects.toThrow("Invalid post format");
  });

  it("throws when response is not an array", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: [] }),
      }),
    ) as jest.Mock;

    await expect(fetchPostsFromAPI()).rejects.toThrow("Invalid response format");
  });

  it("accepts abort signal and passes it to fetch", async () => {
    const controller = new AbortController();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      }),
    ) as jest.Mock;

    await fetchPostsFromAPI(controller.signal);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: controller.signal }),
    );
  });
});
