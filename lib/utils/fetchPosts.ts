import { iTableList } from "@/models/tableList";

function isValidPost(obj: unknown): obj is iTableList {
  if (typeof obj !== "object" || obj === null) return false;

  const post = obj as Record<string, unknown>;

  return (
    typeof post.userId === "number" &&
    typeof post.id === "number" &&
    typeof post.title === "string" &&
    typeof post.body === "string"
  );
}

export async function fetchPostsFromAPI(
  signal?: AbortSignal,
): Promise<iTableList[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15",
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid response format: expected array");
  }

  for (const item of data) {
    if (!isValidPost(item)) {
      throw new Error("Invalid post format: missing required fields");
    }
  }

  return data;
}
