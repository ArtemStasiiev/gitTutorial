import React from 'react';
import './SpendingBreakdown.css'

const spendingBreakdown = (props) => {
        return (
            <div className="SpendingItems">
                <div className="SpendingType" style={{color: `rgba(${props.color})`}}>{props.title}</div>
                <div className="SpendingPrice">${props.ammount}</div>
            </div>
        );
}

export default spendingBreakdown;