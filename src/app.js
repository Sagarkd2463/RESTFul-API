const express = require('express');
require("../src/db/conn");
const router = require('../src/routers/men');

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})


