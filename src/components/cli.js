import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Cli() {
    return (
        
        <section className="cli my-5" >
            <h2 className="lg text-center my-2" >Services</h2>
            <p className="text-center lead my-2" >
                This is how we can help you get more customers
            </p>
            <Zoom>
            <div className="container grid text-center" >
                <div className="card" >
                <img src="./images/software_dev.png" alt="software developers" />
                    <h1>Web and Mobile App Development</h1>
                </div>
                <div className="card" >
                <img src="./images/hosting.png" alt="hosting" />
                
                    <h1>
                        Hosting
                    </h1>
                </div>
                <div className="card" >
                <img src="./images/analytics.png" alt="web analytics" />
                    <h1>
                        Digital Marketing
                    </h1>
                </div>
                <div className="card" >
                <img src="./images/teamwork.png" alt="strong communication" />
                    <h1>
                        Consultation
                    </h1>
                </div>
            </div>
            </Zoom>
        </section>
    );
}