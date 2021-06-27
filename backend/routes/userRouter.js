const router = require("express").Router();
const User = require("../models/userModel");

router.post("/examplepost", async (req, res) => {

  /*
   * Here you would take info out of the request (req) as variables
   * and do some input validation before you upload them.
   * the password would also be encrypted (if you'd like to code this,
   * use a package called "bcrypt")
   */

  try {

    const newUser = new User({
      email: "test@gmail.com",
      password: "qwerty",
      displayName: "USER001",
      isAdmin: false,
    });

    const savedUser = await newUser.save();

    res.status(400).json({ msg: newUser.email });

    console.log("request completed");

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message }); //500: Internal Server Error
  }

});




module.exports = router;
