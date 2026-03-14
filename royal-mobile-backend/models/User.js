const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/* CREATE DEFAULT ADMIN USER */

const createDefaultUser = async () => {
  try {
    const exists = await User.findOne({ email: "RoyalMobile@gmail.com" });

    if (!exists) {
      const user = new User({
        username: "Royal Mobile",
        email: "RoyalMobile@gmail.com",
        password: "RoyalMobile@123"
      });

      await user.save();

      console.log("Default Admin Created");
    }
  } catch (err) {
    console.log(err);
  }
};

createDefaultUser();