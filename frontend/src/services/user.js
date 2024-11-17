import apiClient from "./api";

export const isUserEmployee = async (email) =>{
    const response = await apiClient.get(`/users/is_employee/`, {params: {email}});
    return response.data['data']['is_employee'];
}

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

export const createUser = async (userData) => {
    // Map the schema to ensure it matches Python's schema fields
    const requiredFields = ["name", "ssn", "bday", "address", "email", "phone"];
    const missingFields = requiredFields.filter(field => !(field in userData));

    if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    try {
        const response = await apiClient.post('/users', userData);
        return response.data['user'];
    } catch (error) {
        if (error.response && error.response.status === 400) {
            // Handle validation errors from the server
            console.error('Validation error:', error.response.data.message);
            throw new Error(error.response.data.message);
        }
        // Re-throw other errors
        console.error(error);
        throw error;
    }
};
