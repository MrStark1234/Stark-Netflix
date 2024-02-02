const mongoose = require("mongoose");

exports.Database = function Database() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://cloudbased:RW7OQUTnhYrnpGG6@cluster0.tvf5uah.mongodb.net/netflixData?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
