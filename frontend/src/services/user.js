import apiClient from "./api";

export const getUser = async (id) => {
    try {
        const response = await apiClient.get(`/users/${id}`);
        return response.data['data'];
    } catch (error) {
        console.error(error);
    }
};