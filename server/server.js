require('dotenv').config();

const express = require("express");

const app = express();

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors')
app.use(cors())

const routes = require('./routes/activity.route');
routes(app);

app.listen(process.env.PORT, () => {
    console.log("Server started at port 8080");
})

