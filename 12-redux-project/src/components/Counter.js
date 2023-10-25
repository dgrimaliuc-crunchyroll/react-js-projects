import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  function onDecrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <button
        key='in'
        onClick={dispatch.bind(null, counterActions.increment())}
      >
        Increment
      </button>
      <button key='dec' onClick={onDecrement}>
        Decrement
      </button>
      <button onClick={dispatch.bind(null, counterActions.toggleCounter())}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
