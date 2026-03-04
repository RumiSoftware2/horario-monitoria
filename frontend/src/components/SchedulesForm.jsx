import React, { useState } from 'react';

const options = [
  { value: 'lunes-4-6', label: 'Lunes 4:00 pm – 6:00 pm' },
  { value: 'miercoles-4-6', label: 'Miércoles 4:00 pm – 6:00 pm' },
  { value: 'viernes-11-1', label: 'Viernes 11:00 am – 1:00 pm' },
  { value: 'ninguno', label: 'Ninguno' }
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
    <form onSubmit={handleSubmit} className="panel">
      <h2>Horarios de tutoría (máximo 2)</h2>
      {options.map((opt) => (
        <div key={opt.value} className="schedule-option">
          <label className="form-label">
            <input
              type="checkbox"
              checked={local.schedules.includes(opt.value)}
              onChange={() => toggleSchedule(opt.value)}
            />
            {opt.label}
          </label>
        </div>
      ))}
      <button type="button" onClick={prev} className="back" style={{ marginRight: '1rem' }}>
        Atrás
      </button>
      <button type="submit">Siguiente</button>
    </form>
  );
}