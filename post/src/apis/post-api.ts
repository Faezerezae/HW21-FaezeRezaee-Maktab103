import axios from "axios";


export const fetchPosts = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data;
  }



  export const fetchPostInfo = async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;;
  };


  export const fetchPostComments = async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
    return response.data;;
  };
 
  
