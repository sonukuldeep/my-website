const stripe = require("stripe")(process.env.SECRET_KEY);
const DOMAIN = "https://mywebsite0001.netlify.app"

exports.handler = async (event, context) => {
    //products info -- product id is linked to pricing etc
    const product = {
        1: process.env.ECOMMERCE_ID,
        // 2: process.env.BLOG_ID,
        // 3: process.env.ADVERTISEMENT_ID,
        // 4: process.env.SERVICE_ID,
        // 5: process.env.CLONE_ID,
        // 6: process.env.DESIGN_ID,
    };
    // const { items } = JSON.parse(event.body)
    const lineItems = [];
    // items.forEach(item => {
        lineItems.push({
            // price: product[item.id],
            price: product[1],
            quantity: 1,
        });
    // });

    stripe.checkout.sessions
        .create({
            line_items: lineItems,
            mode: "payment",
            success_url: `${DOMAIN}/success`,
            cancel_url: `${DOMAIN}/cancel`,
        })
        .then(session => {
            res.status(200).send(JSON.stringify({ url: session.url }));

        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });

}