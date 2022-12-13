const express = require('express');
const { 
  insert,
  findAll,
  findById,
  update,
  remove,
} = require('../db/peopleDB');

const peopleRoutes = express.Router();

peopleRoutes.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await insert(person);
    res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Ocorreu um erro ao cadastrar uma pessoa" });
  }
});

peopleRoutes.get('/', async (_req, res) => {
  try {
    const [result] = await findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage});
  }
});

peopleRoutes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await findById(id);
    if (result) return res.status(200).json(result);
    return res.status(404).json({ message: "Pessoa não encontrada" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

peopleRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await update(person, id);
    if (result.affectedRows > 0) return res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso`});
    return res.status(404).json({ message: "Pessoa não encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage });
  }
});

peopleRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await remove(id);
    if (result.affectedRows > 0) return res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso`});
    return res.status(404).json({ message: "Pessoa não encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage });
  }

});

module.exports = peopleRoutes;