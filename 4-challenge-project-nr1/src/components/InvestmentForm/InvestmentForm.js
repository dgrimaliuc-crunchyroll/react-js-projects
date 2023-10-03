import styles from './InvestmentForm.module.css';
import FormInputGroup from './FormInput/FormInputGroup';
import { useState } from 'react';

const initialValue = {
  currentSavings: '',
  yearlyContribution: '',
  expectedReturn: '',
  duration: '',
};

export default function InvestmentForm({ onNewInvestmentAdded }) {
  const [newValue, setNewValue] = useState(initialValue);
  const inputs = [
    {
      id: 'current-savings',
      title: 'Current Savings ($)',
      value: newValue.currentSavings,
      onChange: (e) =>
        setNewValue((prev) => ({ ...prev, currentSavings: +e.target.value })),
    },
    {
      id: 'yearly-contribution',
      title: 'Yearly Savings ($)',
      value: newValue.yearlyContribution,
      onChange: (e) =>
        setNewValue((prev) => ({
          ...prev,
          yearlyContribution: +e.target.value,
        })),
    },
    {
      id: 'expected-return',
      title: 'Expected Interest (% per year)',
      value: newValue.expectedReturn,
      onChange: (e) =>
        setNewValue((prev) => ({ ...prev, expectedReturn: +e.target.value })),
    },
    {
      id: 'duration',
      title: 'Investment Duration (years)',
      value: newValue.duration,
      onChange: (e) =>
        setNewValue((prev) => ({ ...prev, duration: +e.target.value })),
    },
  ];

  function onSubmittForm(e) {
    e.preventDefault();
    if (
      newValue.currentSavings === 0 ||
      newValue.yearlyContribution === 0 ||
      newValue.expectedReturn === 0 ||
      newValue.duration === 0
    ) {
      return;
    }
    onNewInvestmentAdded(newValue);
    setNewValue(initialValue);
  }

  function takeEveryTwo(array) {
    return Array.from({ length: Math.ceil(array.length / 2) }, (_, i) =>
      array.slice(i * 2, i * 2 + 2)
    );
  }

  takeEveryTwo(inputs).map((pair) => {
    return <FormInputGroup inputs={pair} />;
  });

  return (
    <form className={styles.form} onSubmit={onSubmittForm}>
      {/* Renderung Inputs */}
      {takeEveryTwo(inputs).map((pair) => (
        <FormInputGroup key={pair[0].id} inputs={pair} />
      ))}

      {/* Renderung Buttons */}
      <p className={styles.actions}>
        <button
          type='reset'
          className={styles.buttonAlt}
          onClick={() => {
            setNewValue(initialValue);
          }}
        >
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
