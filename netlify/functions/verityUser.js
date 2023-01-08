
exports.handler = async (event,context) => {
    try {
        const { name } = JSON.parse(event.body)
        const greeting = `Hello ${name}`
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow_Origin": "*",
                "Access-Control-Allow_Headers": "Authorization, Content-Type",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(greeting)
        }
    } catch (error) {
        console.log("error occured ", error)

        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow_Origin": "*",
                "Access-Control-Allow_Headers": "Authorization, Content-Type"
            },
            body: JSON.stringify(error)
        }
    }
}