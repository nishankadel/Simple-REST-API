const mongoose = require("mongoose");

// CONNECT MONGODB COMPASS
mongoose
  .connect("mongodb://localhost:27017/Rest-API", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .then(() => console.log(`Connection to the DB is Successful.`))
  .catch((err) => console.log(`Connection to the DB is Broken.`));
