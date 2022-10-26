import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phone = useLoaderData()
    console.log(phone);
    return (
        <div>
            <h3>Sigle Phone</h3>
            <p>Name: {phone.phone_name}</p>
            <img src={phone.image
            } alt="" />
            <p><small>{phone.brand
            }</small></p>

        </div>
    );
};

export default Phones;