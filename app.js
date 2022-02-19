const express = require('express');

const config = require('./src/config/config');
const routerV1 = require('./src/routes/routerv1');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routerV1);

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'success'
    })
})

// Globals
global.statusCode = require('./src/utils/statusCode');
global.response = require('./src/utils/response');

// Not found error handling
app.use(function (err, req, res, next) {

    res.status(err.status || 500).json({
        message: err.message
    });
});

app.listen(config.PORT, () => {
    console.log("App run in port " + config.PORT);
})