
const DB_USER = 'admin_tnol';
const DB_PASSWORD = 'RZqjJ2dFtNXqGbRJ';
config = {
    WEB_PORT: process.env.WEB_PORT || 5555,
    MONGO_URL: process.env.MONGODB || "mongodb+srv://" +
        DB_USER + ":" + 
        DB_PASSWORD + "@cluster0-wssxg.mongodb.net/test?retryWrites=true&w=majority"
}

module.exports = config;