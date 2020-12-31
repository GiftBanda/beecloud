import React from "react";
import Footer from "./footer";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Pricing() {
    return (
        <section className="pricing" >
            <div className=" grid grid-3" >
                <Fade right>
                <div className="card honey-package" >
                    <h1 className="lg" >STANDARD <span className="sm">PACKAGE</span> </h1>
                    <h2 className="lg" >k3750 <span className="sm" >/website</span> </h2>
                    <hr />
                    <p className="sm" >We will design your company website focused on aquiring more sales as the main priority.</p>
                    <ul>
                        <li>
                            Hosting and Domain Name
                        </li>
                        <li>
                            Social Media Profiles Integration
                        </li>
                        <li>
                            Google Analytics Integration
                        </li>
                        <li>
                            Integrating your email service provider(optional)
                        </li>
                    </ul>
                    <a className="btn btn-dark" href="tel:+260977560054" >Call Now</a>
                </div>
                </Fade>
                <Zoom>
                <div className="card honey-pie-package" >
                    <h1 className="lg" >HONEY <span className="sm">PACKAGE</span> </h1>
                    <h2 className="lg" >k6750 <span className="sm" >/website</span> </h2>
                    <hr />
                    <p className="sm" >
                    This package includes everything from the standard package, but also includes the following additional services:
                    </p>
                    <ul>
                        <li>
                            Google Search Console Submission for SEO purposes
                        </li>
                        <li>
                            Database Integration
                        </li>
                        <li>
                            Google local listing(This improves SEO)
                        </li>
                        <li>
                            2 Additional landing pages for marketing campaigns
                        </li>
                        
                        
                    </ul>
                    <a className="btn btn-dark" href="tel:+260977560054" >Call Now</a>
                </div>
                </Zoom>
                <Fade left>
                <div className="card corporate-package" >
                    <h1 className="lg" >CORPORATE <span className="sm">PACKAGE</span> </h1>
                    <h2 className="lg" >k10750 <span className="sm" >/website</span> </h2>
                    <hr />
                    <p className="sm" >
                    This package includes everything from the standard package and honey package respectively , but also includes the following additional services:
                    </p>
                    <ul>
                        <li>
                            Local directories listing(This improves SEO)
                        </li>
                        <li>
                            AdWords account setup, creating effective campaigns and monitoring for improvements
                        </li>
                        <li>
                        	Integrating and configuring additional CTA software tools like SumoMe
                        </li>
                        <li>
                        	Marketing retainer includes SEO and 2x Monthly Articles
                        </li>
                        <li>
                            Monthly Analytics Report
                        </li>
                    </ul>
                    <a className="btn btn-dark" href="tel:+260977560054" >Call Now</a>
                </div>
                </Fade>
            </div>
            <Footer />
        </section>
    );
}