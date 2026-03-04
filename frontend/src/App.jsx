import React, { useState } from 'react';
import BasicInfoForm from './components/BasicInfoForm';
import SchedulesForm from './components/SchedulesForm';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '',
    email: '',
    group: 1,
    schedules: []
  });

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);
  const reset = () => {
    setData({ name: '', email: '', group: 1, schedules: [] });
    setStep(1);
  };

  const updateData = (fields) => {
    setData((d) => ({ ...d, ...fields }));
  };

  return (
    <div className="container">
      {step === 1 && <BasicInfoForm data={data} update={updateData} next={next} />}
      {step === 2 && <SchedulesForm data={data} update={updateData} next={next} prev={prev} />}
      {step === 3 && <Confirmation data={data} prev={prev} onSuccess={reset} />}
    </div>
  );
}

export default App;
