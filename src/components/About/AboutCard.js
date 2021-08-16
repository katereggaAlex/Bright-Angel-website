import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="purple">Bright Angel Education Center </span>
            Located at <span className="purple"> Mulago, Kampala-Uganda. <br/> P.o.Box 235 kampala-Uganda<br/>Email-brightangel@gmail.com</span>
            <br />"Bright Angel Education Center is mixed day primary school.
            It was founded by a group of highly qualified and experienced teachers who have been teaching in top schools in Uganda.
            <br />
            <br />
            </p>
          

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "In God we trust"{" "}
          </p>
          <footer className="blockquote-footer">Bright Angel Education Center</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
