import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import ExpenseList from './components/expenseList/ExpenseList';
import AddExpense from './components/addExpense/AddExpense';

const EXPENSES_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(Date.UTC(2020, 7, 14))
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(Date.UTC(2021, 2, 12))
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(Date.UTC(2022, 4, 28))
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(Date.UTC(2021, 5, 12))
  }
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);
  // console.log(`what is the state now ${JSON.stringify(expenses)}`);
  console.log(`what is the state now ${JSON.stringify(expenses)}`);
  const addExpenseHandler = (itm) => {
    setExpenses((prevExpenses) => {
      return [itm, ...prevExpenses];
    });
    console.log(`what is the adding object ${JSON.stringify(itm)}`);
  };

  return (
    <div className="App">
      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses}></ExpenseList>
    </div>
  );
}

export default App;
