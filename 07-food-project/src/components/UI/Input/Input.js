import classes from './Input.module.css';

export default function Input() {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        type='number'
        min='1'
        max='5'
        step='1'
        onWheel={(e) => e.target.blur()}
      />
    </div>
  );
}
