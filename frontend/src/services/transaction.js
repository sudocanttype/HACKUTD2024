import apiClient from "./api";

const getTransactions = async (user_id) => {
    try {
        const response = await apiClient.get(`/transactions/${user_id}`);
        const transactions =  response.data['data']['transactions'];
        transactions.forEach(element => {
            if (element['status_code'] === 'P'){
                element['status'] = 'Pending';
            }
            else if (element['status_code'] === 'C'){
                element['status'] = 'Completed';
            }
            else if (element['status_code'] === 'D'){
                element['status'] = 'Declined';
            }else if (element['status_code'] === 'R'){
                element['status'] = 'Refunded';
            }else if (element['status_code'] === 'F'){
                element['status'] = 'Failed';
            }else{
                element['status'] = element['status_code'];
            }
        });
        
        return transactions;
    } catch (error) {
        console.log("error!!")
        console.error(error);
    }
}


export default getTransactions;
