import React, { useEffect } from 'react';

export default function SuccessMessage({ onDone }) {
  // after a few seconds automatically notify parent so it can reset the flow
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone && onDone();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="success-screen">
      <h1>¡Envío exitoso!</h1>
      <p>Bienvenido a la tutoría de sistemas numéricos<br />by Sebastián&nbsp;Mendoza</p>
    </div>
  );
}
