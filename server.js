const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');

const app = express();

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
app.use('/hack', require('./routes/privates'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port: ${PORT}`.magenta));
