import React from "react";
import { useState } from "react/cjs/react.development";
import Footer from "./footer";
import {db} from "../firebase/config";

export default function About() {

    const [quotation, setQuotation] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setQuotation( (prevValue) => {
            if(name === "fullname") {
                return {
                  fullname: value,
                  email: prevValue.email,
                  message: prevValue.company
                  
              }
                
            }else if(name === "email") {
                return {
                    fullname: prevValue.fullname,
                    email: value,
                    message: prevValue.message
                }
            }else if(name === "message") {
                return{
                    fullname: prevValue.fullname,
                    email: prevValue.email,
                    message: value
                }
                
            }
        });
    }

    function addQuote(event) {
        event.preventDefault();

        db.settings({
            timestampsInSnapshots: true
        });

        let collectionRef = db.collection('quotation');

        collectionRef.add({
            fullname: quotation.fullname,
            email: quotation.email,
            message: quotation.message
        });

        setQuotation({
          fullname: "",
          email: "",
          message: ""
        });

        alert("Your request for a quotation is successful, expect an email with the quotation and further information from our team shortly");
    }

    return (
        <div className=" about" >
           
            <h1 className="text-center md my-2" >About</h1>
            <article className="subcontainer lead " >
                Growing up in Lusaka, Zambia in a township called matero and seeing how small businesses struggled to scale with high rentals and other operating costs made me realise that there is potential for both small and established businesses to reach more customers locally and even expand to international markets by having a firm online presence and this would help scale their business. 
                Hey my name is Gift Banda founder of the <span>bee</span>-cloud software development company. I have been designing and developing websites and mobile apps for over 3 years and this is what I have come to understand, learning 1 kick and practicing it a thousand times is more rewarding than learning a thousand kicks and practicing only once. This also applies to software development, choosing a niche and dedicating the time and passion to master it is the way to go. 
                <span> bee</span>-cloud has a team of hardworking, dedicated and passionate developers with years of experience in designing and developing websites and mobile apps for ecommerce businesses following the latest trends in the industry. This has helped everyone part of the team master ecommerce software development guaranteeing improved user experience and more sales for our partners.
                If you are having a hard time creating a better online experience that will acquire growth and more customers, let us worry about it and you just focus on running the business.
            </article>
            
            
            <h2 className="md text-center p-3" >Lets Talk</h2>
            <section className="flex">
            <div className="contact " >
                <div className="contact-info " >
                
                <a  href="mailto:bandagift42@gmail.com" >
                    
                    <h3>
                        <span>Email: </span>
                    bandagift42@gmail.com
                    </h3>
                   
                </a>
                <a className="py-2" href="https://wa.me/message/4UOYUNANJP5UL1" >
                    <h3>
                        <span>
                            WhatsApp: 
                        </span>
                    +260 977 560 054
                    </h3>
                    
                </a>
                <a href="tel:+260977560054" >
                    <h3>
                        <span>
                            Call: 
                        </span>
                    +260 977 560 054
                    </h3>
                    
                </a>
                </div>
                <div className="showcase-form card" >
                    <h2>Request a quote</h2>
                    <form onSubmit={addQuote} >
                        <div className="form-control" >
                        <input value={quotation.fullname} type="text" onChange={handleChange} name="fullname" placeholder="Name" required/>

                        </div>
                        <div className="form-control" >
                        <input value={quotation.email} type="email" onChange={handleChange} name="email" placeholder="Email" required/>
                        </div>
                        <div className="form-control" >
                        <textarea value={quotation.message} type="message" onChange={handleChange} name="message"  placeholder="message" required/>
                        </div>
                        {/* <input type="submit" value="Send" className="btn btn-primary sm"  /> */}
                        <button className="btn btn-primary sm" type="submit" >Send</button>
                    </form>
                </div>
            </div>
            </section>
           
            <Footer />
        </div>
    );
}