import React, {Component} from 'react';
import './Transfer.css';
import Payments from '../Transfer/Payments/Payments'
import Wallet from '../Home/Wallet/Wallet';
import SendMoney from './SendMoneyTransfer/SendMoneyTransfer';

class Transfer extends Component {

    state = {
        cardMoney: 16.234
    }
    render() {
        return(
            <div className="TransferCon">
            <div className="TransferConLeft">
                <Payments />
            </div>
            <div className="TransferConRight">
                <Wallet cardMoney={this.state.cardMoney}/>
                <SendMoney />
            </div>
        </div>
        );
    }
}

export default Transfer;