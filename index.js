// index.js

const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(bodyParser.json()); // Parse JSON payloads

// Use the routes from bfhlRoutes
app.use('/', bfhlRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});