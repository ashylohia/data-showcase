import React from 'react';
import ShowPieChart from '../components/ShowPieChart';
import { Link } from 'react-router-dom';


const Page2 = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Analytics</h1>
                <Link to="/"> page1 </Link>
            </div>
            <ShowPieChart />
        </div>
    )
};


export default Page2;
