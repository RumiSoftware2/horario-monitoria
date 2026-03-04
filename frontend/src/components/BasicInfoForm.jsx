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
    <form onSubmit={handleSubmit}>
      <h2>Datos básicos</h2>
      <div>
        <label>Nombre</label>
        <input name="name" value={local.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Correo institucional</label>
        <input name="email" type="email" value={local.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Grupo</label>
        <select name="group" value={local.group} onChange={handleChange}>
          <option value={1}>William (1)</option>
          <option value={2}>Haydee (2)</option>
        </select>
      </div>
      <button type="submit">Siguiente</button>
    </form>
  );
}