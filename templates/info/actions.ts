"use server";

import { fetchPostsFromAPI } from "@/lib/utils/fetchPosts";

export async function fetchPosts() {
  return fetchPostsFromAPI();
}
