import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, Name, Details, img, Price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate('/checkout')
    }




    return (



        <div className="service  col-sm-12 mt-5 " >
            <Card style={{ width: '18rem' }} className="col-sm-12">
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body>
                    <Card.Title className="text-primary text-center">{Name}</Card.Title>
                    <Card.Text className="text-bold text-">
                        {Details}
                    </Card.Text>
                    <h4 >$<span className="text-warning ps-2">{Price}</span></h4>

                    <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Proceed Checkout</button>


                </Card.Body>
            </Card>







        </div >


    );
};

export default Service;