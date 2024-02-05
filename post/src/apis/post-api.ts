import axios from "axios";

export const fetchPosts = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data;
  }