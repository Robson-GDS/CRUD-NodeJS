const express = require('express');

const server = express();

const cursos = ['Node JS', 'Javascript', 'React Native']

server.get('/curso/:index', (request, response) => {
  const { index } = request.params;


  return response.json(cursos[index]);
})

server.listen(3000);