const stripe = require('stripe')('sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj');

const createPaymentIntent = async (amountInCents, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create PaymentIntent');
  }
};

module.exports = {createPaymentIntent}
