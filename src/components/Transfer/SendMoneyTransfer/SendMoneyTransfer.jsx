import React, {Component} from 'react';
import './SendMoneyTransfer.css';
import Charity from '../Payments/Charity/Charity';
import Education from '../Payments/Education/Education';
import Fines from '../Payments/Fines/Fines';
import Games from '../Payments/Games/Games';
import Internet from '../Payments/Internet/Internet';
import MobileCommunication from '../Payments/MobileCommunication/MobileCommunication';
import Traveling from '../Payments/Traveling/Traveling';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class SendMoney extends Component {
    render() {
        return (
            <div className="SendMoneyTransferCon">
                <header>Send money</header>


                <div>
                    <Router>
                        <Switch>
                            <Route path="/transfer/charity" component={Charity} />
                            <Route path="/transfer/education" component={Education} />
                            <Route path="/transfer/fines" component={Fines} />
                            <Route path="/transfer/games" component={Games} />
                            <Route path="/transfer/internet" component={Internet} />
                            <Route path="/transfer/mobileCommunication" component={MobileCommunication} />
                            <Route path="/transfer/traveling" component={Traveling} />
                            {/* <Route path="/traveling/:department" component={Traveling} /> */}
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default SendMoney;


// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import Layout from './components/Layout/Layout'

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Router>
//           <Layout>
//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/history" component={History} />
//               <Route path="/credits" component={Credits} />
//               <Route path="/investing" component={Investing} />
//               <Route path="/spending" component={Spending} />
//               <Route path="/transfer" component={Transfer} />
//             </Switch>
//           </Layout>
//         </Router>