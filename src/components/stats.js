import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAddressBook, faHdd,  faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Stats() {
    return (
        <section className="stats" >
            <div className="container" >
                <h3 className="my-1 text-center stats-heading" >
                    Welcome to the best platform for your next ecommerce projects with modern architecture and scaling giving your users a better experience.
                </h3>

                <div className="grid grid-3 text-center my-4"  >
                    <div>
                        <FontAwesomeIcon icon={faLaptopCode} style={{fontSize: "60px", color: "#81b214"}} />
                        <h3 style={{color: "#81b214"}} >12</h3>
                        <p className="text-secondary" style={{color: "#81b214"}} >Apps Developed</p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faHdd} style={{fontSize: "60px", color: "#047aed"}} />
                        <h3 style={{color: "#047aed"}} >2.5 GB</h3>
                        <p className="text-secondary" style={{color: "#047aed"}} >Hosted</p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faAddressBook} style={{fontSize: "60px", color: "#cd0a0a"}} />
                        <h3 style={{color: "#cd0a0a"}} >50+</h3>
                        <p className="text-secondary" style={{color: "#cd0a0a"}} >Monthly Inquiries</p>
                    </div>

                </div>
            </div>
        </section>
    );
}