const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.APP_PORT || 3000,
    API_KEY: process.env.API_KEY,
}