import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faFan, faHdd, faListUl, faSearch, faStore, faTrademark } from "@fortawesome/free-solid-svg-icons";


export default function Submain() {
    return (
        <section className="features-main my-2" >
            <div className="container grid" >
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faListUl} style={{fontSize: "25px", marginRight: "20px", color: "#047aed"}} />
                    <h2>
                        Google Analytics
                    </h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faHdd} style={{fontSize: "25px", marginRight: "20px", color: "#047aed"}} />
                    <h2>
                        Hosting
                    </h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faTrademark} style={{fontSize: "25px", marginRight: "20px", color: "#047aed"}} />
                    <h2>
                        Domain Registration
                    </h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faStore} style={{fontSize: "25px", marginRight: "20px", color: "#81b214"}} />
                    <h2>
                        Search Engine Marketing
                    </h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faEdit} style={{fontSize: "25px", marginRight: "20px", color: "#81b214"}} />
                    <h2>
                        Local Directories Listing
                    </h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faFan} style={{fontSize: "25px", marginRight: "20px", color: "#81b214"}} />
                    <h2>Google Ads</h2>
                </div>
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faSearch} style={{fontSize: "25px", marginRight: "20px", color: "#81b214"}} />
                    <h2>Search Engine Optimization</h2>
                    
                </div>
               
                
                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faFan} style={{fontSize: "25px", marginRight: "20px", color: "red"}} />
                    <h2>
                        Social Media Profiles Integration
                    </h2>
                </div>

                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faFan} style={{fontSize: "25px", marginRight: "20px", color: "red"}} />
                    <h2>
                        Content Writing
                    </h2>
                </div>

                <div className="card flex" >
                    {/* <img src="./images/cloud.png" alt="cloud" /> */}
                    <FontAwesomeIcon icon={faFan} style={{fontSize: "25px", marginRight: "20px", color: "red"}} />
                    <h2>
                        Email Marketing
                    </h2>
                </div>

                
            </div>
        </section>
    );
}