import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import Card from '../card/Card';
import ExpensesList from '../expensesList/ExpensesList';

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState('2021');
  function onYearChange(event) {
    setSelectedYear(event.target.value);
  }

  const filteredExpenses = expenses.filter(
    (e) => parseInt(selectedYear) === e.date.getFullYear()
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter initialYear={selectedYear} onYearChange={onYearChange} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
