import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer mt-5">
            <p className="text-center "> All credit goes to Md Ariful Hasan Copy right </p>
            <p className="text-center text-warning">Md Ariful Hasan Ontor  Copyright @ {year}</p>


        </div>

    );
};

export default Footer;