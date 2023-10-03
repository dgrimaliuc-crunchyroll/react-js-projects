import './ExpenseForm.css';
import { useState } from 'react';
import ExpenseInputs from '../expenseInputs/ExpenseInputs';
import ExpenseControls from '../expenseControls/ExpenseControls';

const ititialState = {
  title: '',
  amount: '',
  date: new Date(),
};

export default function ExpenseForm(props) {
  const [newExpense, setExpense] = useState({ ...ititialState });

  function handleInput(type, value) {
    switch (type) {
      case 'title':
        setExpense((prevState) => {
          return { ...prevState, title: value };
        });
        break;
      case 'amount':
        setExpense((prevState) => {
          return { ...prevState, amount: +value };
        });
        break;
      case 'date':
        setExpense((prevState) => {
          return { ...prevState, date: new Date(value) };
        });
        break;
      default:
        throw new Error('Invalid input type');
    }
  }

  const [isFormExpanded, setIsForExpanded] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (newExpense.title === '' || newExpense.amount === 0) return;
    props.onAddExpense({
      id: Math.random().toString(),
      ...newExpense,
    });
    setExpense({ ...ititialState });
  }
  console.log('ExpenseForm.js');
  return (
    <form onSubmit={handleSubmit}>
      {!isFormExpanded && (
        <button onClick={() => setIsForExpanded(true)}>Add New Expense</button>
      )}
      <ExpenseInputs
        handleInput={handleInput}
        ititialState={newExpense}
        isFormExpanded={isFormExpanded}
      />
      <ExpenseControls
        isFormExpanded={isFormExpanded}
        newExpense={newExpense}
        setIsForExpanded={setIsForExpanded}
      />
    </form>
  );
}
