const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var userprofile=[];

passport.serializeUser((profile, done) => {
  done(null, profile);
})

passport.deserializeUser((profile, done) => {
  done(null, profile);
})

passport.use(new GitHubStrategy({
    clientID: 'Client_ID',
    clientSecret: 'Secret_ID',
    callbackURL: "http://localhost:5000/auth/github"
  },
  function (token, tokenSecret, profile, done) {
    userprofile = profile;
    done(null, profile);
  }
));

module.exports = function display() {
  return userprofile;
};