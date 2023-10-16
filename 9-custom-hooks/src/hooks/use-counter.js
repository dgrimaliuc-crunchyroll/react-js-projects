import { useState, useEffect } from 'react';

const useCounter = (modifyCounter) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => modifyCounter(prevCounter));
    }, 1000);

    return () => clearInterval(interval);
  }, [modifyCounter]);

  return counter;
};

export default useCounter;
