import apiClient from './api';

/**
 * Makes a Nelle transaction.
 *
 * @param {number} userId - The ID of the sender.
 * @param {string|number} target - The target's email or user ID.
 * @param {number} amount - The amount to transfer.
 * @returns {Promise<object>} - The response from the server.
 * @throws {Error} - If the API call fails or returns an error response.
 */
async function makeNelleTransaction(userId, target, amount) {
    try {
        const response = await apiClient.post('/transactions/nelle', {
            user_id: userId,
            target,
            amount
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            // The server responded with a status outside the 2xx range
            throw new Error(`Error: ${error.response.data.error || 'Transaction failed.'}`);
        } else if (error.request) {
            // The request was made but no response received
            throw new Error('Error: No response received from server.');
        } else {
            // Something else caused the error
            throw new Error(`Error: ${error.message}`);
        }
    }
}

export default makeNelleTransaction;
