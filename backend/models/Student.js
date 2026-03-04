const mongoose = require('mongoose');

const scheduleEnum = ['lunes-4-6', 'miercoles-4-6', 'viernes-11-1', 'ninguno'];

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/.+@.+\..+/, 'Correo inválido'] // formato básico
  },
  group: { type: Number, enum: [1, 2], required: true },
  schedules: {
    type: [String],
    enum: scheduleEnum,
    validate: [arrayLimit, '{PATH} exceeds the limit of 2']
  }
});

function arrayLimit(val) {
  return val.length <= 2;
}

module.exports = mongoose.model('Student', StudentSchema);
