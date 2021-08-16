const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;
const expressSession = require('express-session');

app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use((request, response, next) => {
  let figurineBookMark = null;
  if (request.session.bookmarks) {
      figurineBookMark = request.session.bookmarks;
  }
  response.locals.figurineBookMark = figurineBookMark;
  next();
});

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static(__dirname + '/integration'));

app.use(router);


app.listen(PORT, () => {
  console.log(`Serveur connecté ${BASE_URL}:${PORT}`);
});
