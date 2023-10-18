import { useState, useEffect } from 'react';

export default function useClassName(classes, isValidCondition) {
  const [isValidInput, setIsValidInput] = useState(isValidCondition);
  useEffect(() => {
    setIsValidInput(isValidCondition);
  }, [isValidCondition]);
  let c = classes.control;
  return isValidInput ? c : `${c} ${classes.invalid}`;
}
