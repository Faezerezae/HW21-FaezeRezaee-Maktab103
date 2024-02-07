/** @format */

import axios from "axios";

export const fetchPosts = async (limit: number) => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=0&total=150`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const fetchPostInfo = async (id: number) => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post id:", error);
    throw error;
  }
};

export const fetchPostComments = async (id: number) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/posts/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post comments:", error);
    throw error;
  }
};
