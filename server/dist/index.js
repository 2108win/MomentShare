const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = 8000;
const app = express();
console.log('process.env.MONGODB_URL: ', process.env.MONGODB_URL);
mongoose
    .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: false,
    createIndexes: true,
})
    .then(() => {
    console.log("CONNECTED TO DATABASE");
});
app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map