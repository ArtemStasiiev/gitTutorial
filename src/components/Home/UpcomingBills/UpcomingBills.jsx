import React from 'react';
import './UpcomingBills.css'

const upcomingBills = (props) => {
        return (
                        <div className="BillsCon">
                            <div className="BillsLeftCon">
                                    <img src={props.image} alt=""/>

                                <div className="BillsLabelDateCon">
                                    <div>{props.title}</div>
                                    <div>Due: 02.08.20</div>
                                </div>
                            </div>

                            <div className="BillsRightCon">
                                <div className="BillsPrice">${props.price}</div>
                                <button>Pay</button>
                            </div>
                        </div>
        );
}

export default upcomingBills