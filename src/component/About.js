import React from "react";

import { Route, Link,  Routes} from "react-router-dom";
import './style/About.css'
const About = () =>{
    localStorage.clear();
  return(
<body>
  <div class="container">
     
            
                <div class="avatar">
                 
                </div>
                <div class="about">
                    <div class="name">
                        <p>
                            Hello There!
                        </p>
                        <h1>
                            I'm Amr Arnous
                        </h1>
                    </div>
                    <div class="about-content">
                        <p>
                           We are a team all set to help you out to start your future with us
                        </p>
                       
                    </div>
                </div>
                <div class="clear"></div>
            </div>
           
            
  
  
</body>
  );
  }
  export default About;