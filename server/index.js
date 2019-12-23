const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// https://console.developers.google.com/

// Client Id: 782961547368-rk6ro3teckd6v5rnpf538m3hf2tbjakh.apps.googleusercontent.com
// Secret Id: 0PsNcwRq23BxIg5KQiuYP91G
passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ hi: 'Sandip' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`${PORT} Server runing!`);
});
