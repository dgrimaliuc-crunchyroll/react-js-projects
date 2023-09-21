import './ExpenseItem.css';
import ExpenseDate from '../expenseDate/ExpenseDate';
import Card from '../card/Card';

export default function ExpenseItem({ date, title, amount }) {
  return (
    <Card className='expense-item'>
      <ExpenseDate key={Math.random()} date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
}
