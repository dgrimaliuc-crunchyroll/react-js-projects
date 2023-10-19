import { useState } from 'react';

export default function useInput(initValue) {
  const [value, setValue] = useState(initValue || '');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = value.trim() !== '';
  const hasError = isTouched && !isValid;

  function onChangeHandler(event) {
    setValue(event.target.value);
    setIsTouched(true);
  }

  function reset() {
    setValue('');
    setIsTouched(false);
  }

  return [
    value,
    hasError,
    isValid,
    isTouched,
    setIsTouched,
    onChangeHandler,
    reset,
  ];
}
