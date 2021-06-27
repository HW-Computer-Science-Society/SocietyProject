const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//Server setup

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

//DB Config

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  //Settings: Don't use new features (defaults scheduled for deprecation)
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },

  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// Routes
app.use("/users", require("./routes/userRouter"));

// Production mode: serves a build of the react frontend directly from port 5000
// of the server.

/*
 * How to switch on production mode:
 * 1. Navigate to frontend folder in a command line
 * 2. call the command "npm run build"
 *
 * This will generate a production build folder. If you are on windows, I have
 * included a script that will automatically copy it to the backend folder.
 * If you are on another platform, make sure you copy/paste it there yourself.
 *
 * 3. Go to the .env file and change the NODE_ENV variable to "production"
 *
 */

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/build')));

    console.log("production mode ON");

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/build', 'index.html'));
    });
};

// Listener
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server Active: Listening on port ${PORT}`);

});
