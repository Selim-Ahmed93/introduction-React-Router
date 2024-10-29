// import React from 'react';

import { Outlet } from "react-router-dom";
import './Home.css'


const Home = () => {
    return (
        <div className="component">
           <h1>This is home components</h1> 
           <Outlet></Outlet>
        </div>
    );
};

export default Home;