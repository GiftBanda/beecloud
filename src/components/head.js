import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Head() {
    return (
        <section className="features-head bg-primary py-3 " >
            <div className="container grid" >
                <Fade left>
                <div className="" >
                    <h1 className="xl" >
                        Features
                    </h1>
                    <p className="lead sm" >
                        We pay attention to the data that is then studied and analysed helping us make sound decisions about the growth of the business, therefore always keep you ahead of the competition
                    </p>
                </div>
                </Fade>
                {/* <div>
                    <FontAwesomeIcon icon={faCartPlus} style={{fontSize: "120px"}} />
                </div> */}
                <Zoom>
                <img src="./images/data_analytics.png" alt="data analysis" />
                </Zoom>
            </div>
        </section>
    );
}