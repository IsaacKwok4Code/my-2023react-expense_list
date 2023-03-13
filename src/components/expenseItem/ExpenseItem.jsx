import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../expenseDate/ExpenseDate';
import ExpenseContainer from '../expenseContainer/ExpenseContainer';

function ExpenseItem(props) {
    // console.log(`This is the props ${props.date}`);
    // <button onClick={()=>{console.log(`This is button click.`)}}>consolelog</button>
    /*
    const clickHandler = () => {
        console.log(`This is button click.`)
    };
    */
    // <button onClick={clickHandler}>consolelog</button>
    return (
        <ExpenseContainer className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            
        </ExpenseContainer>
    );
}

export default ExpenseItem;