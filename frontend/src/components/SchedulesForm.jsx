import React, { useState } from 'react';

const options = [
  'lunes-4-6',
  'miercoles-4-6',
  'viernes-11-1',
  'ninguno'
];

export default function SchedulesForm({ data, update, next, prev }) {
  const [local, setLocal] = useState({ schedules: data.schedules });

  const toggleSchedule = (opt) => {
    setLocal((l) => {
      const exists = l.schedules.includes(opt);
      let arr;
      if (exists) {
        arr = l.schedules.filter((s) => s !== opt);
      } else {
        arr = [...l.schedules, opt];
      }
      if (arr.length > 2) return l; // no más de dos
      return { schedules: arr };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(local);
    next();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Horarios de tutoría (máximo 2)</h2>
      {options.map((opt) => (
        <div key={opt}>
          <label>
            <input
              type="checkbox"
              checked={local.schedules.includes(opt)}
              onChange={() => toggleSchedule(opt)}
            />
            {opt}
          </label>
        </div>
      ))}
      <button type="button" onClick={prev} style={{ marginRight: '1rem' }}>
        Atrás
      </button>
      <button type="submit">Siguiente</button>
    </form>
  );
}