export default function CheckoutInput({
  id,
  className,
  title,
  value,
  onChange,
  onBlur,
  hasError,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{title}</label>
      <input
        type='text'
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur.bind(null, true)}
      />
      {hasError && <p>{title} must not be empty</p>}
    </div>
  );
}
