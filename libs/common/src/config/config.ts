export const Config = () => ({
    database: {
        mongo: process.env["MONGO_URI"]
    },
    port: {
        gateway: process.env["API_GATEWAY_PORT"],
        user: process.env["USER_SERVICE_PORT"],
        chat: process.env["CHAT_SERVICE_PORT"]
    }
}) 