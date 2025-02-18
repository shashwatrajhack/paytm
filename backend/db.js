const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rajshashwat789:yE1iGAREbhkAsLgM@cluster0.gcj93.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User", userSchema);
module.exports = {
    User,
}
