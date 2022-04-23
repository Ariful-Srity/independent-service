import React from 'react';
import myImg from '../Images/arif.png';
import './About.css';

const About = () => {
    return (
        <div className="About-container d-flex">
            <div className="text-white text-center text-container  bg-black p-5 rounded">
                <h1 className="text-center text-primary">Hello,Welcome to my website</h1>
                <p>I am Ariful Hasan Ontor.I am a student.I am very serious about my goal for becoming a web developer.
                </p>
                <p>
                    For that i work hard and soul.Unfortunately i am little bit distrack from the couse flow because of my final exam.
                    After finishing my exam i tried very hard to come back strongly to the course flow but still strugling.
                    It's very deficult to cope with the course flow .I thik the course is running very fast.Thats why it is impossible for me to submit my assignment10 on time.I take my time and do it properly.</p>

                <h4 className="text-h4">Keep me in Your prayers.</h4>
                <p>Thanks </p>


            </div>


            <div className="img">
                <img src={myImg} alt="" />
            </div>


        </div>
    );
};

export default About;