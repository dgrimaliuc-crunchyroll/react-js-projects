import Chart from '../chart/Chart';

export default function ExpensesChart({ expenses }) {
  let value = 0;
  const chartDataPoints = [
    { label: 'Jan', value },
    { label: 'Feb', value },
    { label: 'Mar', value },
    { label: 'Apr', value },
    { label: 'May', value },
    { label: 'Jun', value },
    { label: 'Jul', value },
    { label: 'Aug', value },
    { label: 'Sep', value },
    { label: 'Oct', value },
    { label: 'Nov', value },
    { label: 'Dec', value },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart charts={chartDataPoints} />;
}
