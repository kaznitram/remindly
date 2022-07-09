// Zachary Martin
const express = require("express");
const app = express();
// new *******************
const session = require("express-session");  // need to install and import
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const port = 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // CSS, images
// new ****************
app.use(
  session({  // default configs for express session
    secret: "secret",
    resave: true,
    saveUninitialized: false
  })
);

// new ****************
const passport = require("./middleware/passport");
const reminderRoute = require("./routes/reminderRoute");  // index
const authRoute = require("./routes/authRoute");

app.use(express.urlencoded({ extended: false }));  // he has it set to true in the vid???
app.use(ejsLayouts);
// new ****************
app.use(passport.initialize());
// new ****************
app.use(passport.session());




// Routes 
// ----------------
app.use("/reminder", reminderRoute);
// *******************
// Many instances of "/reminders" in original html
// but it makes more sense to have that be "/reminder" for the route home
// ********************
//app.get("/reminders", reminderController.list);  // leave this one for now
app.use("/auth", authRoute);



app.listen(port, function () {
  console.log(
    `Server running. Visit: localhost:${port}/reminders in your browser 🚀`
  );
});
