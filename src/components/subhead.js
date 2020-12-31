import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Subhead() {
    return(
        <Zoom>
        <section className="features-sub-head bg-light py-3" >
            <div className="container grid" >
            <div className="" >
                    <h1 className="md" >
                        bee-cloud platform
                    </h1>
                    <p className="" >
                        Check out the features of bee-cloud that separates us from the competition
                    </p>
                </div>
                
                <img src="./images/going_up.png" alt="data analytics" />
            </div>
        </section>
        </Zoom>
    );
}