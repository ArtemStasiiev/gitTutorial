import React, {Component} from 'react';
import './Home.css';
import Wallet from './Wallet/Wallet';
import SendMoney from './SendMoney/SendMoney';
import UpcomingBills from './UpcomingBills/UpcomingBills'
import SpendingBreakdown from './SpendingBreakdown/SpendingBreakdown'
import upcomingBills from './UpcomingBills/UpcomingBills';

class Home extends Component {

    state = {
        upcomingBills: [
            {title: 'Netflix', price: 12, image: require('../../img/netflix-icon.jpg')},
            {title: 'Apple TV', price: 5.50, image: require('../../img/apple-tv-icon.svg')},
            {title: '+38 063 56 87 154', price: 5, image: require('../../img/lifecell-icon.jpg')}
        ],
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        spendingBreakdown: [
            {title: 'Grocery', color: (19, 217, 221, 1), sum: 766.12},
            {title: 'Bills', color: (31, 255, 113, 1), sum: 456.41},
            {title: 'Transport', color: (255, 207, 15, 1), sum: 255.37},
            {title: 'Subscriptions', color: (245, 114, 0, 1), sum: 181.52},
            {title: 'Entertainment', color: (187, 0, 230, 1), sum: 134.63},
            {title: 'Apparel', color: (0, 130, 230, 1), sum: 96.44},
            {title: 'Other', color: (111, 133, 96, 1), sum: 54.89}
        ]
    }


    render() {
    const upcomingBills = this.state.upcomingBills.map(element => 
        <UpcomingBills 
            title={element.title} 
            price={element.price}
            image={element.image} />);

    const spendingBreakdown = this.state.spendingBreakdown.map(element => 
        <SpendingBreakdown 
            title={element.title}
            color={element.color}
            ammount={element.sum}
            color={element.color} />);

        return(
        <div className="HomeCon">
            <div className="HomeConLeft">
                <Wallet />
                <SendMoney />
            </div>
            <div className="HomeConRight">
            <div className="UpcomingBillsCon">
                <div>
                    <header>Upcoming Bills <span>...</span> </header>
                    <div className="MonthCon">
                        <div>{this.state.monthNames[new Date().getMonth()]}</div>
                    </div>
                </div>
                <div className="UpcomingBillsFunctions">
                    {upcomingBills}
                </div>
            </div>

            <div className="SpendingBreakdownCon">
                <header>Spending breakdown</header>

                <div className="SpendingBreakdownFunctions">
                    {spendingBreakdown}
                </div>
            </div>

            </div>
        </div>
        )
    }
}

export default Home;