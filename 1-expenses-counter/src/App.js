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
    id: 'u5',
    title: 'Car Insurance3',
    amount: 81.7,
    date: new Date(2019, 3, 2),
  },
  {
    id: 'u6',
    title: 'Car Insurance2',
    amount: 56.67,
    date: new Date(2019, 2, 1),
  },
  {
    id: 'u2',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 3, 2),
  },
  {
    id: 'u3',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 4, 18),
  },
  {
    id: 'u4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 1, 20),
  },
  {
    id: 'u7',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 4, 18),
  },
  {
    id: 'u8',
    title: 'New TV',
    amount: 543.49,
    date: new Date(2020, 3, 10),
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
