import React from "react";
import { Container } from "react-bootstrap";
import TeachersCard from "./TeachersCards";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


import teacher1 from "../../Assets/Projects/teacher1.jpg";
import teacher2 from "../../Assets/Projects/teacher2.jpg";
import teacher3 from "../../Assets/Projects/teacher3.jpg";
import teacher4 from "../../Assets/Projects/teacher4.jpg";
import teacher5 from "../../Assets/Projects/teacher5.jpg";
import teacher6 from "../../Assets/Projects/teacher6.jpg";


/* DATA SET CONTAINING IMAGE CARD DATA */
const itemData = [
  {
    image: teacher1,
    title: "Mr. Kateregga Alex",
    description: `He is the cclass teacher of the primary seven.
     He is a very committed teacher who like his job. 
     He has produced first grades for the ten yearrs he has worked with us.`,
    link: "../../Assets/Projects/teacher1.jpg",
    cols: 1
  },
  {
    image: teacher2,
    title: "Mr. Baguma Godfrey",
    description: `He is the class teacher of primary six. he is so commited and hard working teacher. he has a ten years experience in teaching and has a master's degree in mathematics.`,
    link: "../../Assets/Projects/teacher2.jpg",
    cols: 2
  },
  {
    image: teacher3,
    title: "Madam Tendo Flavia",
    description: "She is the class teacher of primary five. She is so commited and hard working teacher. She has a ten years experience in teaching and she is has worked with big organisations in uganda and across the contient.",
    link: "",
    cols: 2
  },
  {
    image: teacher4,
    title: "Madam Nansubuga Annet",
    description: `She is the class teacher of primary four. She is so commited and hard working teacher. She has a ten years experience in teaching and she is sits on board of lower primary council in uganda`,
    link: "",
    cols: 1
  },
  {
    image: teacher5,
    title: "Madam Teddy Kabuye",
    description: `She is the class teacher of primary two and one. She is so commited and hard working teacher. She has a ten years experience in teaching and she is has worked with big schools in the country and she is so caring and knows how to handle kids.`,
    link: "",
    cols: 2
  },
  {
    image: teacher6,
    title: "Mr. Tonny Kabuye",
    description: `He is the class teacher of primary three. She is so commited and hard working teacher. He has a ten years experience in teaching and he is has worked with big organisations in uganda and across the contient.`,
    link: "",
    cols: 1
  }
]

function Teachers() {


  /* PLEASE REFER TO THIS LINK FOR MORE DETAILS.
  * https://material-ui.com/components/image-list/#image-list
  */
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          Meet our  <strong className="purple">Teachers </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a team of teachers we have at Bright Angel education center.
        </p>
        <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <ImageList rowHeight={700} cols={3}>
            {itemData.map(({ image, title, description, link, cols }) => (
              <ImageListItem key={title} cols={cols || 1}>
                <TeachersCard
                  className="project-card"
                  imgPath={image}
                  title={title}
                  description={description}
                  link={link}
                />
              </ImageListItem>
            ))}
          </ImageList>

        </Container>
      </Container>
    </Container>
  );
}

export default Teachers;
