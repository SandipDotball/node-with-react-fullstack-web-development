const mongoose = require('mongoose');
const Survey = require('../models/SurveyModel');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/surveyTemplate');

module.exports = app => {
  app.get('/app/surveys/thanks', (req, res) => {
    res.send('Thanks for Voting!');
  });
  app.post('/api/surveys', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' });
    }
    if (req.user.credits < 1) {
      return res.status(403).send({ error: 'Not enough Credits!' });
    }

    const { title, body, subject, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
