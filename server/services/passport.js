const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = require('../models/UserModel');

// https://console.developers.google.com/

// That is Setting ID as cookie in user's browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// That is Getting ID from the cookie and then used callback user Information
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // Already have user and User found in Database and given User Id
          done(null, existingUser);
        } else {
          // No User found in Database and create new User profile
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
