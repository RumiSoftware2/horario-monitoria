import React, { useState } from 'react';
import API from '../api';

export default function Confirmation({ data, prev, onSuccess }) {
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
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
    <div>
      <h2>Confirmación</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {status && (
        <p style={{ color: status.success ? 'green' : 'red' }}>{status.message}</p>
      )}
      <button type="button" onClick={prev} style={{ marginRight: '1rem' }}>
        Atrás
      </button>
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
}