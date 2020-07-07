import React, {Component} from 'react';
import './History.css';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory'

class History extends Component {

    render() {
        return(
        <div className="HistoryCon">
            <div className="HistoryConLeft">
                <TransactionsHistory />
            </div>

            <div className="HistoryConCenter">

            </div>

            <div className="HistoryConRight">

            </div>
        </div>
        )
    }
}

export default History;