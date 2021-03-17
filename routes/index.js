const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    const message = `Welcome to the Express CORS Proxy \n
        Send a url as a query parameter through this proxy to pass CORS checks\n
        i.e. http://localhost:3000/?url=https://somesitewithcors.com/
    `;
    res.send(message);
});

module.exports = router;
