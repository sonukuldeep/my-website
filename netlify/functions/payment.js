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
    const lineItems = [{
        // price: product[item.id],
        price: product[1],
        quantity: 1,
    }]


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

    // try {
    //     // const { items } = JSON.parse(event.body)
    //     const greeting = {greeting: `Hello ${product[1]}, `}
    //     return {
    //         statusCode: 200,
    //         headers: {
    //             "Access-Control-Allow_Origin": "*",
    //             "Access-Control-Allow_Headers": "Authorization, Content-Type",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(greeting)
    //     }
    // } catch (error) {
    //     console.log("error occured ", error)

    //     return {
    //         statusCode: 400,
    //         headers: {
    //             "Access-Control-Allow_Origin": "*",
    //             "Access-Control-Allow_Headers": "Authorization, Content-Type"
    //         },
    //         body: JSON.stringify(error)
    //     }
    // }

}