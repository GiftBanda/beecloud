import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Partners() {
    return (
        <Zoom>
        <section className="partners" >
            <h2 className="md text-center my-2" >
                Partners
            </h2>
            <div className="container flex" >
                <div className="card" >
                    <h4>
                        Beestributors
                    </h4>
                    <img src="./images/beestributors.png" alt="beverages" />
                </div>
                <div className="card" >
                    <h4>
                        Gift Banda
                    </h4>
                    <img src="./images/cloud.png" alt="beverages" />
                </div>
                <div className="card" >
                    <h4>
                        ifixFashions
                    </h4>
                    <img src="./images/ifixfashion.png" alt="ecommerce" />
                </div>
                <div className="card" >
                    <h4>
                        ifixPhoto
                    </h4>
                    <img src="./images/ifixphoto.png" alt="gallery" />
                </div>
                
            </div>
        </section>
        </Zoom>
    );
}