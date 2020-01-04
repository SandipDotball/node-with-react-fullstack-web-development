const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use bodyParser
app.use(bodyParser.json());

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
// Initilize Billing Router
billingRoutes(app);

// For Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index.html));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`${PORT} Server runing!`);
});
