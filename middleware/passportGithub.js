// passport Github
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const GITHUB_CLIENT_ID = "203caa6ac8cc9eb5ff82";
const GITHUB_CLIENT_SECRET = "cb71b676a127974bee1327681a4c1136fc6746cd";


const githubLogin = new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
    }
);

  module.exports = passport.use(githubLogin);