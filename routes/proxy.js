const express = require('express'),
    fetch = require('node-fetch'),
    router = express.Router();

router.get('/', async (req, res) => {
    const { url } = req.query;
    try {
        const response = await fetch(url).then((response) => response.json());
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.status(200).send(response);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;
