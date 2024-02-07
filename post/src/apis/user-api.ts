import axios from "axios";


export const fetchUsers = async () => {
    const response = await axios.get(`https://dummyjson.com/users`);
    return response.data;
};


export const fetchUserById = async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
};

