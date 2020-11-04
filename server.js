const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Future use for routes
// const routes = require("./routes");
// app.use(routes);

app.listen(PORT, function() {
    console.log(`Port ${PORT} Listening...`);
});