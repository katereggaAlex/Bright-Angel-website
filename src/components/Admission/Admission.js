
import { Container } from "react-bootstrap";
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
        {/* <p style={{ color: "white" }}> </p> */}
        <Container style={{ justifyContent: "center", height: "100%", paddingBottom: "10px" }}>

          {/* please add your download link in the props below  */}
          <a href={"/"} download={"/"}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />&nbsp;Download Admission Form
            </Button>
          </a>

        </Container>

      </Container>
    </Container>
  );
}

export default Admission;
