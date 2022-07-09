
module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated())
        {
            return next();
        }
        
        res.redirect("/auth/login");
    },


    // what to do if you are already logged in ?
    // wouldn't make sense to let them go to the log in page again
    forwardAuthenticated: function (req, res, next)
    {
        if (!req.isAuthenticated())
        {
            return next();
        }
        res.redirect("/reminder"); 
    }
};