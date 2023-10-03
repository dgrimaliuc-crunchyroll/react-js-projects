export default function FormInput({ props }) {
  return (
    <p>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type='number'
        id={props.id}
        onChange={props.onChange}
        step='0.1'
        value={props.value.toString()}
      />
    </p>
  );
}
