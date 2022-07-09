let database = require("../database");
const passport = require("../middleware/passport");

// forwardAuthenticated  // do this in the route ??
let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  // forwardAuthenticated
  register: (req, res) => {
    res.render("auth/register");
  },

  // forwardAuthenticated
  loginSubmit: 
    passport.authenticate("local", {  // will pass to local strategy in passport
      successRedirect: "/reminder", 
      failureRedirect: "/auth/login"  
  }),

  // forwardAuthenticated
  registerSubmit: (req, res) => {
    // implement
  },

  logoutSubmit: (req, res) => {
    req.logout(function(err) {
      if (err) { return next(err); }
  });  // convenciene functino created by passport
  res.redirect("/auth/login");
  }
};

/*
// new ****************
router.post(
  "/login",
  passport.authenticate("local", {  // will pass to local strategy in passport
      successRedirect: "/putSomethingHere******",  // ******** put something here
      failureRedirect: "/auth/login"
  })
);

// logout
// -------
router.get("/logout", (req, res) => {
  req.logout();   // convenience function by passport
  res.redirect("/auth/login");
});

*/



module.exports = authController;
