
const express = require("express");

const app = express();

const port = process.env.PORT || 30000;

app.get("/", function(req, res){

    res.send("<h1>Hello World!</h1>");

})

app.listen(port, () => {

    console.info(`Aplicação iniciada em http://localhost:${port}`);

})