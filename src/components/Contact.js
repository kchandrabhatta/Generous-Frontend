import React from 'react';
import * as AiIcons from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneEnvironment } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
           
<section class="mb-4">

   
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Have any questions or suggestions? Please do not hesitate to contact us directly. Leave your information below and we'll get back to you as soon as we can!</p>

    <div class="row">

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row">

                  
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"></input>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"></input>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                 

                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"></input>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
             

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
       

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p><AiTwotoneEnvironment /></p>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p><AiFillPhone /></p>
                    <p>678-999-8212</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p><AiIcons.AiFillMail /></p> 
                    <p>contact@Generous.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>

        </div>
    )
}

export default Contact;