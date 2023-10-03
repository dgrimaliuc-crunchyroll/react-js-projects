import style from './InvestmentResultTable.module.css';
import TableHeader from './TableHeader';
import ResultRow from './ResultRow';

export default function InvestmentResultTable({
  tableData,
  initialInvestment,
}) {
  return (
    <table className={style.result}>
      <TableHeader />
      <tbody>
        {tableData.length === 0 && (
          <tr>
            <td>No data found</td>
          </tr>
        )}
        {tableData.length > 0 &&
          tableData.map((row) => {
            return (
              <ResultRow
                key={row.year}
                props={row}
                initialInvestment={initialInvestment}
              />
            );
          })}
      </tbody>
    </table>
  );
}
