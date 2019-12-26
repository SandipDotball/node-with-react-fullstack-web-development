const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use Cookie Session
app.use(
  cookieSession({
    maxAge: 10 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Use Passport Session
app.use(passport.initialize());
app.use(passport.session());

// Initilize Auth Router
authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`${PORT} Server runing!`);
});
