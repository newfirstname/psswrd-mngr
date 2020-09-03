const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const exphbs = require('express-handlebars');

var getIP = require('ipware')().get_ip;

const connectDB = require('./config/db');

const ipObtainer = function (req, res, next) {
  console.log('1');
  console.log(req.header('x-forwarded-for'));
  console.log('2');
  console.log(req.headers['x-forwarded-for']);
  console.log('3');
  console.log(req.connection.remoteAddress);
  console.log('4');
  console.log(req.ip);
  console.log('5');
  console.log(req.ips);
  console.log('6');
  console.log(req.headers['x-real-ip']);
  console.log('7');
  console.log(req.connection);

  next();
};

const app = express();

app.set('trust proxy', true);

app.use(ipObtainer);

app.use(function (req, res, next) {
  var ipInfo = getIP(req);
  console.log('ipaware');
  console.log(ipInfo);
  next();
});

app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

dotenv.config({ path: './config/config.env' });

connectDB();

app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'development') {
  app.use(
    morgan('dev', {
      skip: function (req, res) {
        return req.url == '/favicon.ico';
      },
    })
  );
}

app.use('/api/usernames', require('./routes/usernames'));
app.use('/D78B6F30225CDC811ADFE8D4E7C9FD34', require('./routes/privates'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port: ${PORT}`.magenta));
