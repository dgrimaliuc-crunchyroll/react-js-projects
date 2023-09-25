import './NewExpense.css';
import ExpenseForm from '../expenseForm/ExpenseForm';

export default function NewExpense(props) {
  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={props.onAddExpense} />
    </div>
  );
}
