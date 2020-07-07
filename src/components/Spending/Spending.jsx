import React, {Component} from 'react';
import './Spending.css';
import SpendingInfo from './SpendingInfo/SpendingInfo';
import SpendingBreakdownInfo from './SpendingBreakdownInfo/SpendingBreakdownInfo';
import ExpensesIncome from './ExpensesIncome/ExpensesIncome';
import ExpenseChart from './ExpenseChart/ExpenseChart';

class Spending extends Component {

    render() {
        return(
        <div className="SpendingCon">
            <div className="SpendingConLeft">
                <SpendingInfo />
                <SpendingBreakdownInfo />
            </div>
            <div className="SpendingConRight">
                <ExpensesIncome />
                <ExpenseChart />
            </div>
        </div>
        );
    }
}

export default Spending;