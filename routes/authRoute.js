const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller");
const passport = require("../middleware/passport");
//const githubPassport = require("./middleware/passportGithub");
const { forwardAuthenticated, isAdmin } = require("../middleware/checkAuth");
// for github
const database = require("../model/userModel").database; 
//const userModel = require("../model/userModel").userModel;  


// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
// will have to change everythign to /auth/.... in the code

// forwardAuthenticated  // do this in the route ??
router.get("/register", forwardAuthenticated, authController.register);
router.get("/login", forwardAuthenticated, authController.login);
router.post("/register", forwardAuthenticated, authController.registerSubmit);

router.post("/login", forwardAuthenticated, authController.loginSubmit); 
router.get("/logout", authController.logoutSubmit);


// github
// may need to had github constant above from middleware
router.get('/github',//'/auth/github',
  passport.authenticate('github'));         // add this to login page. @ 9:25 **********

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    
    // add user if not in database
    userID = (database.find((user) => user.id === req.user.id));
    if ( !userID)
    {
        console.log("creating new user from github");
        const newUser = {
            id: req.user.id,
            name: req.user.username,
            reminders: []
        };
        database.push(newUser);
    }

    res.redirect('/reminder');
  });




module.exports = router;