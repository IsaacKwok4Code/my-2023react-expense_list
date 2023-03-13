import React from 'react';
import './ExpenseContainer.css';

function ExpenseContainer(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default ExpenseContainer;