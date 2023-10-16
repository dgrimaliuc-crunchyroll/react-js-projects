import classes from './MealItemForm.module.css';
import Input from '../UI/Input/Input';

export default function MealItemForm({ onAddToCart, value, setValue }) {
  return (
    <form className={classes.form} onSubmit={onAddToCart}>
      <Input value={value} setValue={setValue} />
      <button type='submit'>+ Add</button>
    </form>
  );
}
