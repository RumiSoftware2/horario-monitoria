const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// crear nuevo estudiante
router.post('/', async (req, res) => {
  try {
    const { name, email, group, schedules } = req.body;
    // validaciones sencillas
    if (!name || !email || !group) {
      return res.status(400).json({ error: 'name, email y group son obligatorios' });
    }

    const student = new Student({ name, email, group, schedules });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    // duplicados de llave única
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(400).json({ error: `${field} ya existe` });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Error al guardar el estudiante' });
  }
});

// obtener todos (opcional)
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

module.exports = router;
