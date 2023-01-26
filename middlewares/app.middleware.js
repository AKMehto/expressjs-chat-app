const config = require("../config");

module.exports = (req, res, next) => {

    req.config = config;

    if(req.headers['api-key'] !== req.config.API_KEY) {
        return res.status(400).json({
            message: "Invalid api key!"
        });
    }

    return next();
}