import React, { useState } from 'react';

export default function BasicInfoForm({ data, update, next }) {
  const [local, setLocal] = useState({ name: data.name, email: data.email, group: data.group });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocal((l) => ({ ...l, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(local);
    next();
  };

  return (
    <form onSubmit={handleSubmit} className="panel">
      <h2>Datos básicos</h2>
      <div>
        <label className="form-label">Nombre</label>
        <input name="name" value={local.name} onChange={handleChange} required />
      </div>
      <div>
        <label className="form-label">Correo institucional</label>
        <input name="email" type="email" value={local.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="form-label">Grupo</label>
        <select name="group" value={local.group} onChange={handleChange}>
          <option value={1}>Grupo 1 – William</option>
          <option value={2}>Grupo 2 – Haydee</option>
        </select>
      </div>
      <button type="submit">Siguiente</button>
    </form>
  );
}