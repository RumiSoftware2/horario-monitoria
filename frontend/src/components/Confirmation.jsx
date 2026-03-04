import React, { useState } from 'react';
import API from '../api';

export default function Confirmation({ data, prev, onSuccess }) {
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    console.log('enviando datos', data);
    try {
      const res = await API.post('/students', data);
      setStatus({ success: true, message: 'Guardado correctamente' });
      // después de un par de segundos volver al formulario inicial
      setTimeout(() => {
        onSuccess && onSuccess();
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: err.response?.data?.error || 'Error' });
    }
  };

  return (
    <div className="panel">
      <h2>Confirmación</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {status && (
        <p className={`status ${status.success ? 'success' : 'error'}`}>{status.message}</p>
      )}
      <button type="button" onClick={prev} className="back" style={{ marginRight: '1rem' }}>
        Atrás
      </button>
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
}