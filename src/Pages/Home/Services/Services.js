import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));



    }, [])
    return (
        <div >
            <h1 className="text-center text-warning  mb-5 mt-5 " >My Services:</h1>

            <div className="services " >


                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)


                }
            </div>

        </div>
    );
};

export default Services;