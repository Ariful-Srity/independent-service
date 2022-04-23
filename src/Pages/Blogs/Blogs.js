import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="mt-5">
            <div className="question1 bg-secondary text-white p-3 text-center rounded">
                <h4 className="text-black">Question1:Difference between authorization and authentication?</h4>
                <p>Answer:Authentication verifies who the user is where
                    as Authorization determines what resources a user can access.</p>
                <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                <p>On the other hand 	Authorization works through settings that are implemented and maintained by the organization.</p>
            </div>

            <div className="question2 bg-success text-center p-3 mt-5 mb-5 text-warning">
                <h4 className="text-black">Question2:Why are you using firebase? What other options do you have to implement authentication?</h4>
                <h6>Answer:Firebase manages all data real-time in the database.
                    Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.
                    It reduces development workload and time.
                    And it's a perfect prototyping tool.
                    Firebase is simple, lightweight, friendly, and industrially recognized.Thats Why we use firebase.</h6>
                <h6>The other options are Google Authentication,Git hub,Facebook etc.</h6>


            </div>

            <div className="question3 bg-secondary p-5 ">
                <h4 className="text-black">Question3:What other services does firebase provide other than authentication?</h4>

                <h6 className="text-center text-white">
                    There are many services which Firebase provides, Most useful of them are:
                    <p> 1.Cloud Firestore.</p>
                    <p>2.Cloud Functions.</p>
                    <p>3. Hosting.</p>
                    <p> 4.  Cloud Storage.</p>
                    <p>5. Google Analytics.</p>
                    <p>6.Predictions.</p>

                    7. Cloud Messaging.</h6>


            </div>


        </div>
    );
};

export default Blogs;