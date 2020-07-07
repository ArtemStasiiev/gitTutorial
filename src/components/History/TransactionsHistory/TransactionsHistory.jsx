import React, {Component} from 'react';
import './TransactionsHistory.css';

class TransactionsHistory extends Component {
    render() {
        return (
            <div className="TransactionsHistoryCon">
                <header>Transactions</header>
                <div className="TransactionsHistoryDaysCon">
                    <div className="MonthCon">Today</div>
                    <div className="TransactionsHistoryItemsCon">
                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>
                    </div>


                    <div className="MonthCon">Yesterday</div>
                    <div className="TransactionsHistoryItemsCon">
                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>
                    </div>


                    <div className="MonthCon">July</div>
                    <div className="TransactionsHistoryItemsCon">
                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                        <div className="TransactionsHistoryItem">
                            <div className="TransactionsHistoryItemLeftCon">
                                <div className="IconCon">
                                    <div>Icon</div>
                                </div>
                                <div className="TransactionName">Rocket espresso</div>
                            </div>
                            <div className="TransactionsHistoryPrice">-$10</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TransactionsHistory;