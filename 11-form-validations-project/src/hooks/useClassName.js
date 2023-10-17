import { useState, useEffect } from 'react';

export default function useClassName(condition) {
  const [isValidInput, setIsValidInput] = useState(condition);
  useEffect(() => {
    setIsValidInput(condition);
  }, [condition]);

  return isValidInput ? 'form-control' : 'form-control invalid';
}
