const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const proffys = [
  {
     name: 'Diego Fernandes',
     avatar: 'https://github.com/diego3g.png', 
     whatsapp: '900000000', 
     bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.', 
     subject: 'Química', 
     cost: '20,00', 
     weekday: [0], 
     time_from: [720], 
     time_to: [1200]
   },
   {
     name: 'Mayk Brito',
     avatar: 'https://github.com/maykbrito.png', 
     whatsapp: '900000000', 
     bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.', 
     subject: 'Química', 
     cost: '20,00', 
     weekday: [1], 
     time_from: [720], 
     time_to: [1200]
   }
 ]
const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const pageLanding = (req, res) => {
  res.render('index.html');
};

const pageStudy = (req, res) => {
  console.log(req.query);
  const filters = req.query;
  res.render('study.html', { proffys, filters, subjects, weekdays });
};

const pageGiveClasses = (req, res) => {
  console.log('object');
  const data = req.query;
  console.log(data);
  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    console.log('object');
    proffys.push(data);
    return res.redirect('/study');
  }

  return res.render('give-classes.html', { subjects, weekdays });
};

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.static('public'))
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .listen(5500);
