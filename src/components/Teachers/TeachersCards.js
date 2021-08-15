import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TeachersCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button>
        <Card.Link href={props.imgPath}>View Picture</Card.Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TeachersCards;
