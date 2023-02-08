require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const domain = process.env.DOMAIN

const product = {
    1: process.env.ECOMMERCE_ID,
    2: process.env.BLOG_ID,
    3: process.env.ADVERTISE_ID,
    4: process.env.CLONE_ID,
    5: process.env.DESIGN_ID,
    6: process.env.SERVICE_ID,
};

exports.handler = async (event) => {
    try {
        const lineItems = []
        const { items } = JSON.parse(event.body)
        items.forEach(item => {
            lineItems.push({
                price: product[item.id],
                quantity: 1,
            });
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${domain}/success`,
            cancel_url: `${domain}/cancel`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: session.url })
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error)
        }
    }
}