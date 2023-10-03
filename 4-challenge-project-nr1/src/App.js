import { useState } from 'react';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResultTable from './components/InvestmentResultTable/InvestmentResultTable';

const tableContent = [];

function App() {
  const [tableData, setTableData] = useState(tableContent);
  let userInput = { initialInvestment: 0 };

  function onNewInvestmentAdded(investment) {
    const yearlyData = calculateHandler(investment);
    const newTableData = getUpdatedTable(yearlyData);
    setTableData(newTableData);
    userInput = investment;
  }

  function getUpdatedTable(yearlyData) {
    let tempTable = [...tableData];
    yearlyData.forEach((element) => {
      const presentYeat = tempTable.find((e) => e.year === element.year);
      if (presentYeat) {
        presentYeat.yearlyInterest += element.yearlyInterest;
        presentYeat.savingsEndOfYear += element.savingsEndOfYear;
        presentYeat.yearlyContribution += element.yearlyContribution;
      } else {
        tempTable.push(element);
      }
    });

    return tempTable;
  }

  const calculateHandler = (investment) => {
    const yearlyData = [];

    // per-year results
    let currentSavings = +investment.currentSavings;
    const yearlyContribution = +investment.yearlyContribution;
    const expectedReturn = +investment.expectedReturn / 100;
    const duration = +investment.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData;
  };

  return (
    <div>
      <Header />
      <InvestmentForm onNewInvestmentAdded={onNewInvestmentAdded} />
      <InvestmentResultTable
        tableData={tableData}
        initialInvestment={userInput.initialInvestment}
      />
    </div>
  );
}

export default App;
