import apiClient from "./api";

/**
 * Create a new check deposit.
 *
 * @param {string} userId - The user ID associated with the check deposit.
 * @param {string} imageBase64 - The check image in Base64 format.
 * @param {number} amount - The amount for the check deposit.
 * @returns {Promise} - A promise resolving with the API response.
 */
export async function createCheckDeposit(userId, imageBase64, amount) {
	try {
    console.log("b64")
		console.log(imageBase64);

		const response = await apiClient.post("/check_deposit", {
			user_id: userId.toString(),
			image_b64: imageBase64,
			amount: amount,
		});
		return response.data;
	} catch (error) {
		console.error(
			"Error creating check deposit:",
			error.response?.data || error.message
		);
		throw error;
	}
}
export async function getPendingChecks() {
  try {
    const response = await apiClient.get('/get_p_check_deposits', {
    });
    return response.data;
  } catch (error) {
    console.error('Error creating check deposit:', error.response?.data || error.message);
    throw error;
  }
}
