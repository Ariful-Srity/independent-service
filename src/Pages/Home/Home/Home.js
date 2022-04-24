import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../Images/Banner/banner.jpg'
import banner2 from '../../Images/Banner/hush-naidoo-jade-photography-eKNswc0Qxz8-unsplash.jpg'
import banner3 from '../../Images/Banner/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg'
import Services from '../Services/Services';

import Awards from '../../Awords/Awards';


const Home = () => {
    return (
        <div>

            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img style={{ height: "400px" }}
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Twenty four hour ECG</h3>
                            <p>Twenty four hour services are availavail.I ensure your best services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100 height-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Extra Care for New born Baby </h3>
                            <p>We have exter care about new born baby.I always check up the baby</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Any time Support</h3>
                            <p>Patients can get support any time .If any one try to contant with me feel free to contact</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            <Services></Services>
            <Awards></Awards>
        </div>
    );
};

export default Home;