import classes from './MealItemForm.module.css';
import Input from '../UI/Input/Input';

export default function MealItemForm({ id, onAddToCart }) {
  return (
    <form className={classes.form}>
      <Input />
      <button type='submit'>+ Add</button>
    </form>
  );
}
