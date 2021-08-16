import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from './ContactCard';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone:'',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ name: '',phone:'', email: '', message: '' })
  }

  render() {
    return (
      <Container fluid className="project-section">

        <Container>
          <h1 className="project-heading">
            <strong className="purple">Contact Form</strong>
          </h1>
          <p style={{ color: "white" }}>
              YOU  CAN SEND US A MESSAGE  
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
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Phone</label>
                  <input type="number" className="form-control" id="phone" value={this.state.phone} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
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

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
   onPhoneChange(event) {
    this.setState({ phone: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;