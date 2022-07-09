const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller");
const passport = require("../middleware/passport");
const { forwardAuthenticated, isAdmin } = require("../middleware/checkAuth");


// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
// will have to change everythign to /auth/.... in the code

// forwardAuthenticated  // do this in the route ??
router.get("/register", forwardAuthenticated, authController.register);
router.get("/login", forwardAuthenticated, authController.login);
router.post("/register", forwardAuthenticated, authController.registerSubmit);

router.post("/login", forwardAuthenticated, authController.loginSubmit); 
router.get("/logout", authController.logoutSubmit);


// github does something like this
/*
router.post(
    "/login",
    passport.authenticate("github", {
        successRedirect: "/putSomethingHere******",
        failureRedirect: "/auth/login"
    })
);
*/


module.exports = router;