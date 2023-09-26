// import { useState } from 'react';
import './ExpenseControls.css';

export default function ExpenseControls({
  isFormExpanded,
  setIsForExpanded,
  newExpense,
}) {
  function compressForm() {
    setIsForExpanded(false);
  }

  function compressIfNotEmpty() {
    if (newExpense.title === '' || newExpense.amount < 0.1) return;
    compressForm();
  }

  return (
    <div className={isFormExpanded ? 'actions-container' : 'hidden'}>
      <button onClick={compressForm}>Cancell</button>
      <button type='submit' onClick={compressIfNotEmpty}>
        Add Expense{' '}
      </button>
    </div>
  );
}
