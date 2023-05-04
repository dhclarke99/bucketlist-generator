const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

hbs.handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    // return options.fn(this);
    return true;
  }
  // return options.inverse(this);
  return false;
});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





// const request = require('request');

// request.get({
//   url: 'https://api.api-ninjas.com/v1/bucketlist',
//   headers: {
//     'X-Api-Key': 'YOUR_API_KEY'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });