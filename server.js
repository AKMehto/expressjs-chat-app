const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const appMiddleware = require('./middlewares/app.middleware');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.APP_PORT || 3000;
const mongoConn = process.env.MONGO_CONN;

app.use(appMiddleware);

app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => res.json({message: 'Success!'}));

app.use('*', (req, res) => {
    return res.status(404).json({
        message: 'Invalid endpoint!'
    });
});

app.listen(port, async () => {
    console.log('Server is running on port: ' + 3000);
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoConn, {
        maxPoolSize: 4,
    }).then(() => {
        console.log('DB connected!');
    });
})