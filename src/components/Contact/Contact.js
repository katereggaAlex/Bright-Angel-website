import React from 'react';
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from './ContactCard';


init("user_cO4f1P4pdFcZ7VMgu9Bd4");
export default function ContactUs() {

   function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_k3za3gv', 'template_cye7p8e', e.target, 'user_cO4f1P4pdFcZ7VMgu9Bd4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


     return (
      <Container fluid className="project-section">

        <Container>
          <h1 className="project-heading">
            <strong className="purple">Contact Form</strong>
          </h1>
          <p style={{ color: "white" }}>
              YOU  CAN SEND US A MESSAGE 🤳  
            </p> 
          <Container style={{ justifyContent: "center", paddingBottom: "10px" ,boxShadow: "0 0 20px 0 rgba(72,94,116,0.7)" }}>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            >
            <div className="App">
               <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                           <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <label htmlFor="name">Phone</label>
                            <input type="tel" id="phone" className="form-control" placeholder="Phone" name="from_phone"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            </Col>
            <Col
            md={5}
            style={{  justifyContent: "right",
              paddingTop: "30px",
              paddingBottom: "50px",
               }}
            className="about-contacts"
          >
            <ContactCard/>
            
          </Col>
        </Row>

          </Container>
        </Container>
      </Container>
    );
  
}

