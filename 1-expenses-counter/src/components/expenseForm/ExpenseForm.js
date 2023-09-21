import './ExpenseForm.css';
import { useState } from 'react';

const ititialState = {
  title: '',
  amount: '',
  date: '',
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
          return { ...prevState, amount: value };
        });
        break;
      case 'date':
        setExpense((prevState) => {
          return { ...prevState, date: value };
        });
        break;
      default:
        throw new Error('Invalid input type');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSaveExpenseData(newExpense);
    // console.log(newExpense);
    setExpense({ ...ititialState });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={newExpense.title}
            onChange={(e) => handleInput('title', e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={newExpense.amount}
            min='0.01'
            step='0.01'
            onChange={(e) => handleInput('amount', e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={newExpense.date}
            min='2023-09-19'
            max='2030-09-19'
            onChange={(e) => handleInput('date', e.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
