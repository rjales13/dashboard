import { fetchPosts } from "./actions";
import { InfoDisplay } from "./display";
import { iTableList } from "@/models/tableList";

export const InfoTemplate = async () => {
  let posts: iTableList[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (err) {
    error = "Unable to load posts. Please try again later.";
  }

  if (error) {
    return (
      <div className="text-red-500 p-4" role="alert">
        <p>{error}</p>
      </div>
    );
  }

  return <InfoDisplay posts={posts} />;
};
