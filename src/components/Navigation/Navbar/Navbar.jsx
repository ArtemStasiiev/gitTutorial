import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const navbar = (props) => (
    <div className="NavbarCon">
        <header className="Navbar">
            <div className="Logo">PayPal</div>
            {/* <nav> */}
                <div className="NavItems">
                    <NavLink to="/" style={{textDecoration: 'none'}}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/transfer" style={{textDecoration: 'none'}}>
                        <li>Transfer</li>
                    </NavLink>
                    <NavLink to="/spending" style={{textDecoration: 'none'}}>
                        <li>Spending</li>
                    </NavLink>
                    <NavLink to="/credits" style={{textDecoration: 'none'}}>
                        <li>Credits</li>
                    </NavLink>
                    <NavLink to="/investing" style={{textDecoration: 'none'}}>
                        <li>Investing</li>
                    </NavLink>
                    <NavLink to="/history" style={{textDecoration: 'none'}}>
                        <li>History</li>
                    </NavLink>
                </div>
            {/* </nav> */}

            <div className="AuthorizationCon">
                <div className="Language"></div>
                <div className="Settings"></div>
                <div className="Authorization"></div>
            </div>
        </header>
    </div>

);

export default navbar;