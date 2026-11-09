import Link from "next/link";
import { iTableList } from "@/models/tableList";

interface InfoDisplayProps {
  posts: iTableList[];
}

export function InfoDisplay({ posts }: InfoDisplayProps) {
  return (
    <>
      <ul className="list-disc">
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
      <Link
        href="/"
        className="text-blue-500 transition hover:opacity-70 flex justify-end text-lg font-bold"
      >
        to Dash
      </Link>
    </>
  );
}
