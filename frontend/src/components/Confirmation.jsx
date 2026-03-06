import React, { useState } from 'react';
import API from '../api';
import SuccessMessage from './SuccessMessage';

export default function Confirmation({ data, prev, onSuccess }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    console.log('enviando datos', data);
    setLoading(true);
    try {
      const res = await API.post('/students', data);
      setStatus({ success: true, message: 'Guardado correctamente' });
      setLoading(false);
      // muestra la pantalla de éxito con estilo de juego
      setShowSuccess(true);
      // la propia SuccessMessage llamará a onSuccess tras unos segundos
    } catch (err) {
      console.error(err);
      setLoading(false);
      setStatus({ success: false, message: err.response?.data?.error || 'Error' });
    }
  };

  if (showSuccess) {
    // cuando la data se envió correctamente mostramos el componente especial
    return <SuccessMessage onDone={onSuccess} />;
  }

  return (
    <div className="panel">
      <h2>Confirmación</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {loading && <p className="status loading">Cargando... (el servidor puede tardar en responder) por lo que es gratuito jejejeje</p>}
      {status && !loading && (
        <p className={`status ${status.success ? 'success' : 'error'}`}>{status.message}</p>
      )}
      <button type="button" onClick={prev} className="back" style={{ marginRight: '1rem' }}>
        Atrás
      </button>
      <button type="button" onClick={handleSubmit} disabled={loading}>
        Enviar
      </button>
    </div>
  );
}