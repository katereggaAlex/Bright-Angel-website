import { Container,Table } from "react-bootstrap";

export default function Fees() {

    return (<Container fluid className="project-section">

        <Container>
            <h1 className="project-heading">
                <strong className="purple"> Fees Structure </strong>
            </h1>
             <p style={{ color: "white" }}>
               Below are the fees structure for our school
            </p> 
            <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>

                {/* Add your Fees structure here as a list of classes and fee price*/}
                <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Fees Name</th>
      <th>Class</th>
      <th>Fees Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Admission fee  </td>
      <td>All class</td>
      <td>shs. 100,000 </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Tuition fee </td>
      <td>P1-P5</td>
      <td>shs. 1,060,000 per term</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tuition fee </td>
      <td>P6-P7</td>
      <td>shs. 1,260,000 per term </td>
    </tr>
    <tr>
      <td>4</td>
      <td colSpan="2">Interview</td>
      <td>shs. 60,000 </td>
    </tr>
    <tr>
      <td>5</td>
      <td colSpan="2">Uniform Fee:(To be paid once annually)</td>
      <td>shs. 560,000  </td>
    </tr>
  </tbody>
</Table>

            </Container>
        </Container>
    </Container>);
}
