import apiClient from "./api";

export const getUser = async (id) => {
    try {
        const response = await apiClient.get(`/users/${id}`);
        return response.data['user'];
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Explicitly return null for 404 errors
            return null;
        }
        // Re-throw other errors or handle them differently if needed
        console.error(error);
        throw error;
    }
};


export const getUserByEmail = async (email) => {
    try {
        const response = await apiClient.get(`/users/by_email`, {params:{email}});
        return response.data['user'];
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Explicitly return null for 404 errors
            return null;
        }
        // Re-throw other errors or handle them differently if needed
        console.error(error);
        throw error;
    }
};

