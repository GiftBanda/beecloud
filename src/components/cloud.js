import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Cloud() {
    return (
        <Zoom>
        <section className="cloud my-2 py-2 " >
            <div className="container grid" >
                <div className="text-center" >
                    <h2 className="md" >We help ecommerce businesses increase their sales online </h2>
                    <p className="lead sm my-1" >
                        Ecommerce software development like you've never seen. Fast, efficient and scalable. Our designs focus on acquiring more customers as the main priority.
                    </p>
                    <a className="btn btn-dark" href="tel:+260977560054" >Call Now</a>
                </div>
                <img src="./images/analysist.png" alt="cloud" />
            </div>
        </section>
        </Zoom>
    );
}