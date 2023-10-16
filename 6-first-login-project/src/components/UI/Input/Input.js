import { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(
  ({ value, isValid, onChangeHandler, type, text }, ref) => {
    const inputRef = useRef();

    function activate() {
      inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={type}>{text}</label>
        <input
          ref={inputRef}
          type={type}
          id={type}
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
);
export default Input;
