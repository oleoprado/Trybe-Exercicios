const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();
app.use(express.json());

function existingId(req, res, next) {
  const id = Number(req.params.id);

  if (teams.some(team => team.id === id)) {
    return next();
  } else {
    res.status(400).json({ error: "ID não encontrado"})
  }
};

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);

  const team = teams.find(team => team.id === id);

  res.status(200).json(team);
});

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo'}));
app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const { name, initials } = req.body;

  const updateTeam = teams.find(team => team.id === id);
  updateTeam.name = name;
  updateTeam.initials = initials;

  res.status(200).json(updateTeam);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);

  const arrayPosition = teams.findIndex((team) => team.id === id);
  teams.splice(arrayPosition, 1);

  res.status(200).json({ message: 'Deletado com sucesso!!'});
});


module.exports = app;