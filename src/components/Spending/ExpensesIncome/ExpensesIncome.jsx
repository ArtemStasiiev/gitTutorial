import React, {Component} from 'react';
import './ExpensesIncome.css'

class ExpensesIncomes extends Component {
    render() {
        return (
            <div className="ExpensesIncomeCon">
                <div className="ExpensesCon">
                    <header>Expenses</header>

                    <div className="ExpensesSumCon">
                        <div className="ExpensesSum">2,043.31 <span>USD</span> </div>
                    </div>
                </div>

                <div className="IncomeCon">
                    <header>Income</header>

                    <div className="IncomeSumCon">
                        <div className="IncomeSum">2,500 <span>USD</span> </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ExpensesIncomes;