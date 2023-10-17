import { useState } from 'react';

export default function useInput(test) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = test(value);

  function onChangeHandler(event) {
    setValue(event.target.value);
    setIsTouched(true);
  }

  function reset() {
    setValue('');
    setIsTouched(false);
  }

  return [value, isValid, isTouched, setIsTouched, onChangeHandler, reset];
}
