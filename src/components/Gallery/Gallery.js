import about from "../../Assets/about.png";
import bus from "../../Assets/bus.jpg";
import class1 from "../../Assets/class1.jpg";
import class2 from "../../Assets/class2.jpg";
import class3 from "../../Assets/class3.jpg";
import class4 from "../../Assets/class4.jpg";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Container } from "react-bootstrap";


//Import more you want images and insert them into the data array
// cols is the number of columns the image occupies relate to the number of columns
const data = [
    {
        image: about,
        cols: 3
    },
    { 
        image: bus,
        cols: 2
    },
    {
        image: class1,
        cols: 1
    },
    {
        image: class2,
        cols: 3
    },
    {
        image: class3,
        cols: 1
    },
    {
        image: class4,
        cols: 2
    },
];


export default function Gallery() {

    return (<Container fluid className="project-section">

        <Container>
            <h1 className="project-heading">
                <strong className="purple">Gallery </strong>
            </h1>
            {/* <p style={{ color: "white" }}>
               
            </p> */}
            <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* the cols prop is the number of columns */}
            <ImageList rowHeight={700} cols={3}>
                {data.map(({ image, cols }, index) => (
                    <ImageListItem key={index} cols={cols || 1}>
                        <img src={image} alt={"images"} />
                    </ImageListItem>
                ))}
            </ImageList>

            </Container>
        </Container>
    </Container>);
};