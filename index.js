const { response } = require('express');
const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Node JS', 'Javascript', 'React Native']

function checkCurso(request, response, next) {
  if(!request.body.name){
    return response.status(400).json({ error: "nome do curso é obrigatório"});
  }

  return next();
}

server.get('/cursos', (request, response) => {
  return response.json(cursos);
});

server.get('/cursos/:index', (request, response) => {
  const { index } = request.params;


  return response.json(cursos[index]);
})

// Criando um novo curso
server.post('/cursos', checkCurso, (request, response) => {
  const { name } = request.body;
  cursos.push(name);

  return response.json({ message: 'Curso adicionado com sucesso!'});
})

// Atualizando um curso
server.put('/cursos/:index', checkCurso, (request, response) => {
  const { index } = request.params;
  const { name } = request.body;

  cursos[index] = name;

  return response.json({ message: `Curso ${name} inserido com sucesso`});
})

// Deletando um curso
server.delete('/cursos/:index', (request, response) => {
  const { index } = request.params;

  cursos.splice(index, 1);
  return response.json({ message: 'Curso deletado com sucesso!'})
})

server.listen(3000);