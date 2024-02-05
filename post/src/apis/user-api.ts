import axios from "axios";

export const fetchUserById = async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
};
