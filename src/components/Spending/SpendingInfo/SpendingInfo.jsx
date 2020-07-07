import React, { Component } from 'react';
import './SpendingInfo.css'

class SpendingInfo extends Component {
    render() {
        return (
            <div className="SpendingInfoCon">
                <header>Spending</header>

                <div className="SpendingInfoSumCon">
                    <div className="SpendingInfoSum">2,043.31 <span>USD</span> </div>
                </div>
            </div>
        );
    }
}

export default SpendingInfo