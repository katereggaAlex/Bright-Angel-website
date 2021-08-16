import { Container,Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/FEES-STRUCTURE-ADMISSION-FORM.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Admission() {


  return (
    
    <Container fluid className="project-section">
      <Particle />
      

      <Container>
        <h1 className="project-heading">
          <strong className="purple">Admission Form </strong>
        </h1>
        <p style={{ color: "white" }}>Please click on the link below and download the admission form, fees structure,rules and medical form.
        Then submit the filed forms to the school office.</p> 
        <Container style={{ justifyContent: "center", height: "100%", paddingBottom: "10px" }}>

          {/* please add your download link in the props below  */}
          <a href="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/FEES-STRUCTURE-ADMISSION-FORM.pdf?alt=media&token=bccf9676-3b2d-4395-986d-7d3fcfa1a88c" download= "https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/FEES-STRUCTURE-ADMISSION-FORM.pdf?alt=media&token=bccf9676-3b2d-4395-986d-7d3fcfa1a88c">
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />&nbsp;Download Admission Form
            </Button>
          </a>

        </Container>
      </Container>
      <Container  style={{ justifyContent: "center", paddingTop: "30px" }}>
         <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/prayer.jpg?alt=media&token=2e350bcb-6c08-46b9-b185-d8de762ebd95"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We put God first</h3>
      <p style={{fontSize:20 }} >We teach our children to honor and to pray to go always if they are to be successful in life.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/library2.jpg?alt=media&token=9b1e62e1-b4a0-429e-90d1-9c3a91f558f2"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Library</h3>
      <p style={{fontSize:20 }}>We have a well stocked library with books recommended by the ministry.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/bus.jpg?alt=media&token=14b14caa-d791-4128-b61b-cb9fb77f84b1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>School Bus</h3>
      <p style={{fontSize:20 }}>We have your kid's movements from home covered</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/bestimage%20(2).jpg?alt=media&token=282de2ad-f1cd-4b60-be1c-9d663b7c650a"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Smiling kid</h3>
      <p style={{fontSize:20 }}>We always want to put that smile on our pupils plus the parents with good service.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 "
      src="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/library.jpg?alt=media&token=e55303e6-7cf2-43e5-a661-a09c20c24bec"
      alt="Fiveth slide"
    />
    <Carousel.Caption>
      <h3>Library Books</h3>
      <p style={{ color: "red",fontSize:20 }}>Are you still worried about the books your child should read? Look no further, we have got you covered. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
    </Container>
    
  );
}

export default Admission;
