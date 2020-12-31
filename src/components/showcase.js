import React from "react";
import { useState } from "react";
import {db} from "../firebase/config";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


export default function Showcase() {

    const [inquiry, setInquiry] = useState({
        fullname: "",
        company: "",
        email: ""
    });
    
    
    function handleChange(event) {
        const {name, value} = event.target;

        setInquiry( (prevValue) => {
            if(name === "fullname") {
                return {
                  fullname: value,
                  company: prevValue.company,
                  email: prevValue.email
              }
                
            }else if(name === "company") {
                return {
                    fullname: prevValue.fullname,
                    company: value,
                    email: prevValue.email
                }
            }else if(name === "email") {
                return{
                    fullname: prevValue.fullname,
                    company: prevValue.company,
                    email: value
                }
                
            }
        });
    }

    function addInquiry(event) {
        
        event.preventDefault();

        let collectionRef = db.collection('inquire');

        collectionRef.add({
            fullname: inquiry.fullname,
            company: inquiry.company,
            email: inquiry.email,
        });

        setInquiry({
          fullname: "",
          company: "",
          email: ""
        });

        alert("Thank you for getting in touch with us, expect an email from our team shortly");
    }

    return(
        <section className="showcase" >
            <div className="container grid" >
                <Fade left>
                <div className="showcase-text" >
                    <h1>
                        Focus on running your business, while we focus on growing your business
                    </h1>
                    <p>
                        We have a team of dedicated and passionate ecommerce software developers to help your business improve sales and get more clients by building websites and mobile apps that communicate the message to the user.
                    </p>
                    <a className="btn btn-outline" href="tel:+260977560054" >Call Now</a>
                </div>
                </Fade>
                <Zoom>
                <div className="showcase-form card" >
                    <h2>Get In Touch</h2>
                    <form onSubmit={addInquiry} >
                        <div className="form-control" >
                        <input value={inquiry.fullname} type="text" onChange={handleChange} name="fullname" placeholder="Name" required/>

                        </div>
                        <div className="form-control" >
                        <input value={inquiry.company} type="text" onChange={handleChange} name="company" placeholder="Company Name" required/>
                        </div>
                        <div className="form-control" >
                        <input value={inquiry.email} type="email" onChange={handleChange} name="email" placeholder="Email" required/>
                        </div>
                        {/* <input type="submit" value="Send" className="btn btn-primary sm"  /> */}
                        <button className="btn btn-primary sm" type="submit" >Send</button>
                    </form>
                </div>
                </Zoom>
            </div>
        </section>
    );
}