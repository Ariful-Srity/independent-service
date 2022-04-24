import React from 'react';
import protecte from '../Images/protected.jpg'
import './Checkout.css'

const Checkout = () => {

    return (
        <div className="Checkout">

            <div className="text">
                <h1 className="text-warning text-center">This is Check Out</h1>
                <h4 className="text-center">The service you want to recived is a private service and it is a prepaid srvice.

                </h4>
            </div>
            <div className="img-con">
                <img className="img" src={protecte} alt="" />
            </div>





        </div>
    );
};

export default Checkout;