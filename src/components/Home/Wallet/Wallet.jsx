import React, {Component} from 'react';
import './Wallet.css'

class Wallet extends Component {
    state = {
        cardMoney: 16.234
    }
    render() {
        return (
            <div className="WalletCon">
                <header>Wallet</header>
                <div className="CardCon">
                    <div className="Card">
                        <div className="UsdCon">
                            <div>USD</div>
                        </div>
                        <div className="CardMoneyCon">
                            <div>${this.state.cardMoney}</div>
                        </div>
                        <div className="CardNumberCon">
                            <div>**** 4439</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallet;