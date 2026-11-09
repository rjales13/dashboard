import { fetchPosts } from "./actions";
import { InfoDisplay } from "./display";

export const InfoTemplate = async () => {
  let posts = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load posts";
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        <p>Error loading posts: {error}</p>
      </div>
    );
  }

  return <InfoDisplay posts={posts} />;
};
