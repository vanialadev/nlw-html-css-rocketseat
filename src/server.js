const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const pageLanding = (req, res) => {
  res.render('index.html');
};

const pageStudy = (req, res) => {
  res.render('study.html');
};
const pageGiveClasses = (req, res) => {
  res.render('give-classes.html');
};

nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

server
  .use(express.static('public'))
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .listen(5500);
