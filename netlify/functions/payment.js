require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = "https://mywebsite0001.netlify.app"

//products info -- product id is linked to pricing etc
const product = {
    1: process.env.ECOMMERCE_ID
};

exports.handler = async (event) => {
    try {
        console.log("this is log")
        const lineItems = [{
            price: product[1],
            quantity: 1,
        }];
        // const items = req.body.items;
        // items.forEach(item => {
        //     lineItems.push({
        //         price: product[item.id],
        //         quantity: 1,
        //     });
        // });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${DOMAIN}/success`,
            cancel_url: `${DOMAIN}/cancel`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: session.url })
        }
    } catch (error) {
        console.log({error})
        return {
            statusCode: 400,
            body: JSON.stringify( error )
        }

    }
}