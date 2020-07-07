import React, {Component} from 'react';
import './SendMoney.css'
class SendMoney extends Component {
    render() {
        return (
            <div className="SendMoneyCon">
                <header>Send money</header>
                <form className="SendMoneyElements">
                    <div className="TemplatesCon">
                        <div>+</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="CardNumberInpCon">
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="AmmountInpCon">
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="SendBtnCon">
                        <div>
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SendMoney;