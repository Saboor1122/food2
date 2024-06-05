import { createPayPalOrder, capturePayPalOrder } from './payments';

const sendPaymentDetails = async (details) => {
    const paymentDetails = {
        amount: details.amount,
        method: 'paypal'
    };

    try {
        // Create PayPal order
        const orderResponse = await createPayPalOrder(paymentDetails);
        console.log('Order created:', orderResponse);

        // Capture PayPal order
        const captureResponse = await capturePayPalOrder(orderResponse.id);
        console.log('Payment captured:', captureResponse);
    } catch (error) {
        console.error('Error:', error.message);
        throw new Error(error.message);
    }
};

export default sendPaymentDetails;
