const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(passport.initialize());
require("./config/passport")(passport);

const routes = require("./routes");

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gopaypos", {
    useCreateIndex: true,
    useNewUrlParser: true
})

app.listen(PORT, function() {
    console.log(`Port ${PORT} Listening...`);
});