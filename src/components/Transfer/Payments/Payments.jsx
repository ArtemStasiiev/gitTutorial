import React, {Component} from 'react';
import './Payments.css'
import {Link} from 'react-router-dom';


class Payments extends Component {
    render() {
        return (
            <div className="PaymentsCon">
                <header>Payments</header>

                <div className="PaymentsItemsCon">
                    <div className="PaymentsItemsConInside">
            
                    <Link to="/transfer/mobileCommunication">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Mobile communication</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/internet">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Internet</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/traveling">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Traveling</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/fines">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Fines</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/games">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Games</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/education">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Education</div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/transfer/charity">
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>Charity</div>
                        </div>
                    </div>
                    </Link>

                    <Link>
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>PaymentsName</div>
                        </div>
                    </div>
                    </Link>

                    <Link>
                    <div className="PaymentsItems">
                        <div className="PaymentsIconCon">
                            <div>ICON</div>
                        </div>
                        <div className="PaymentsNameCon">
                            <div>PaymentsName</div>
                        </div>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Payments;