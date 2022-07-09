const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controller/userController");  

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },

  (email, password, done) => {
    // Check if the user exists in the database
    const user = userController.getUserByEmailIdAndPassword(email, password);

    return user
        ? done(null, user)
        : done(null, false, {
            message: "Your login details are not valid. Please try again"
        });
  }
);


// user is passed from localLogin above via the done(null, user) above
// creates a session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
// the user object gets stored on req.user = { ... }
// retrieve anything from the currently logged in user


passport.deserializeUser(function (id, done) {
    const user = userController.getUserById(id);
    if (user) 
    {
        done(null, user);
    }
    else
    {
        done({ message: "User not found" }, null);
    }
});



module.exports = passport.use(localLogin);
