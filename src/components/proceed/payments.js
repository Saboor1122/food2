import axios from 'axios';

export const createPayPalOrder = async (paymentDetails) => {
    try {
        const response = await axios.post('http://localhost:3000/createpayment', paymentDetails);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to create PayPal order');
    }
};

export const capturePayPalOrder = async (orderId) => {
    try {
        const response = await axios.post('http://localhost:3000/capturepayment', { orderId });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to capture PayPal order');
    }
};

export default { createPayPalOrder, capturePayPalOrder };
