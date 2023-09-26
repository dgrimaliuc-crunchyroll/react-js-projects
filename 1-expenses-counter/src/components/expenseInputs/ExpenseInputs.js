import './ExpenseInputs.css';

export default function ExpenseControls({
  handleInput,
  ititialState,
  isFormExpanded,
}) {
  if (!isFormExpanded) {
    return;
  }

  return (
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          value={ititialState.title}
          onChange={(e) => handleInput('title', e.target.value)}
        />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          value={ititialState.amount}
          min='0.01'
          step='0.01'
          onChange={(e) => handleInput('amount', e.target.value)}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          value={ititialState.date.toISOString().split('T')[0]}
          min='2019-09-19'
          max='2030-09-19'
          onChange={(e) => handleInput('date', e.target.value)}
        />
      </div>
    </div>
  );
}
