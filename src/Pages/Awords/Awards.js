import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img1 from '../Images/doctor1.png';
import img2 from '../Images/doctor2.png';
import img3 from '../Images/doctor3.png';
import img4 from '../Images/doctor4.png';
import doctor from '../Images/Female.jpg';
import './Awards.css'

const Awards = () => {
    return (
        <div className="bg-primary mt-5">
            <h1 className="text-warning mb-5 mt-5 text-center">Awards And Accolades</h1>
            <div className="img-div">

                <div className="img1 pe-4">
                    <img src={img1} alt="" />
                </div>
                <div className="img1 pe-4">
                    <img src={img2} alt="" />
                </div>
                <div className="img1 pe-4">
                    <img src={img3} alt="" />
                </div>
                <div className="img1">
                    <img src={img4} alt="" />
                </div>



            </div>
            <div className="appoinment-container">
                <div className="appoinment-text">
                    <h4 className="text-apponment">Make an Appoinment To Doctor Visit</h4>
                    <div className="form">
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="name" placeholder="Enter Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicService">
                                <Form.Control type="text" placeholder="Enter the service name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Control type="text" placeholder="Enter Your MObile Number" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="date" placeholder="Enter the Date" required />
                            </Form.Group>
                            <Button variant="warning w-50 mx-auto d-block mb-3" type="submit">
                                Make An Appoinment
                            </Button>
                        </Form>



                    </div>

                </div>


                <div className="img-part">
                    <img src={doctor} alt="" />

                </div>


            </div>




        </div>
    );
};

export default Awards;