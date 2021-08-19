import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcome from "../../Assets/welcomeimage.jpg";
import Particle from "../Particle";
import HomeCard from "./HomeCard";

function Home2() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Little information about us<strong className="purple"> </strong>
            </h1>
            <HomeCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={welcome} alt="about" className="img-fluid" />
          </Col>
        </Row>


      </Container>
      
    </Container>
  );
}
export default Home2;
