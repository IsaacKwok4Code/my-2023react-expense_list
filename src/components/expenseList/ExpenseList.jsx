import React, { useState } from 'react';
import './ExpenseList.css';
import ExpensesLists from '../expensesLists/ExpensesLists';
import ExpenseContainer from '../expenseContainer/ExpenseContainer';
import ExpensesFilter from '../expenseFilter/ExpensesFilter';

// <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

function ExpenseList(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        // console.log('filterChangeHandler function call', selectedYear);
        if(selectedYear === 'notSelected') {
            return setFilteredYear('notSelected');
        }
        return setFilteredYear(selectedYear);
      // console.log('filterChangeHandler function call', selectedYear);
    };

    const filteredExpenses = props.items.filter((itm) => {
        // console.log('filteredExpenses function call', itm);
        if(filteredYear === 'notSelected') {
            return itm;
        }
        return itm.date.getFullYear().toString() === filteredYear;
    });

    return (
        <ExpenseContainer className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesLists items={filteredExpenses} />
        </ExpenseContainer>
    );
}

export default ExpenseList;