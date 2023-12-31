const express = require('express');

cors = require('cors');
const httpStatusCode = require('http-status-codes');
const apiRoutes = require('./routes/api.routes');

require('dotenv').config();

require('./config/db');

const app = express();
app.use(express.static("client"));
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

});

