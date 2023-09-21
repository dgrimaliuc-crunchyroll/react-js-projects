import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import Card from '../card/Card';

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState('2021');
  function filterByYearHandler(event) {
    setSelectedYear(event.target.value);
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter
        initialYear={selectedYear}
        onYearChange={filterByYearHandler}
      />
      {expenses
        .filter((e) => parseInt(selectedYear) === e.date.getFullYear())
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
