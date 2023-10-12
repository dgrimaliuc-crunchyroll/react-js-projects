import classes from './Input.module.css';

export default function Input({ value, setValue }) {
  function onChange(event) {
    setValue(+event.target.value);
  }
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        type='number'
        min='1'
        max='5'
        step='1'
        value={value}
        onChange={onChange}
        onWheel={(e) => e.target.blur()}
      />
    </div>
  );
}
