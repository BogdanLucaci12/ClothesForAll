require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        
        const jasonBase = atob(event.body);
        const { amount } = JSON.parse(jasonBase);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "ron",
            payment_method_types: ["card"]
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 400,
            body: JSON.stringify({ err })
        };
    }
};
