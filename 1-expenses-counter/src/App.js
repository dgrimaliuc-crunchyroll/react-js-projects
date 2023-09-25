import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import './App.css';
import NewExpense from './components/newExpense/NewExpense';

const initialExpenses = [
  {
    id: 'u1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 8),
  },
  {
    id: 'u2',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 3, 2),
  },
  { id: 'u3', title: 'New TV', amount: 799.49, date: new Date(2021, 4, 18) },
  {
    id: 'u4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 1, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  function onAddExpense(newExpense) {
    setExpenses((prevState) => [newExpense, ...prevState]);
  }
  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
