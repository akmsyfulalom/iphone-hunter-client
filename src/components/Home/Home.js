import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <h3>Show me all phones you have</h3>
            <h5> I got: {phones.length}</h5>
            {
                phones.map(ph => <li><Link to={`/phone/${ph.id}`}>{ph.phone_name}</Link></li>)
            }

        </div>
    );
};

export default Home;