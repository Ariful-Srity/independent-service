import React from 'react';
import protecte from '../Images/protected.jpg'

const Checkout = () => {

    return (
        <div>
            <h1 className="text-warning text-center">This is Check Out</h1>
            <h4 className="text-center">This is a protected route </h4>
            <img className="ms-5 ps-5 mt-5" src={protecte} alt="" />



        </div>
    );
};

export default Checkout;