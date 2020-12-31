import React from "react";
import Showcase from "./showcase";
import Stats from "./stats";
import Cli from "./cli";
import Cloud from "./cloud";
import Partners from "./partners";
import Footer from "./footer";

export default function Home() {
    return (
       <div>
           <Showcase />
           <hr />
          <Stats />
          <hr />
          <Cli />
          <hr />
          <Cloud />
          <Partners />
          <Footer />
       </div>
    );
}
