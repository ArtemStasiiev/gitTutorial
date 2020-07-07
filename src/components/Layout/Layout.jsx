import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navigation/Navbar/Navbar';
import './Layout.css'
const layout = (props) => (
    <Auxiliary>
        <Navbar />
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;