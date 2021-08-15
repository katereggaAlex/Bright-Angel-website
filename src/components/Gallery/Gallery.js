import about from "../../Assets/about.png";
import bus from "../../Assets/bus.jpg";
import bus2 from "../../Assets/bus.jpg";
import class1 from "../../Assets/class1.jpg";
import class2 from "../../Assets/class2.jpg";
import class3 from "../../Assets/class3.jpg";
import class4 from "../../Assets/class4.jpg";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import library from "../../Assets/library.jpg";
import image5 from "../../Assets/image5.jpg";
import library2 from "../../Assets/library2.jpg";
import image7 from "../../Assets/image7.jpg";
import image8 from "../../Assets/image8.jpg";
import prayer from "../../Assets/prayer.jpg";
import Sports from "../../Assets/Sports.jpg";
import happyface from "../../Assets/happyface.jpg";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Container } from "react-bootstrap";


//Import more you want images and insert them into the data array
// cols is the number of columns the image occupies relate to the number of columns
const data = [
    {
        image: about,
        cols: 2
    },
    {
        image: image1,
        cols: 2
    },
    {
        image: image2,
        cols: 2
    },
    {
        image: image3,
        cols: 2
    },
    {
        image: library,
        cols: 2
    },
    {
        image: image5,
        cols: 2
    },
    {
        image: bus2,
        cols: 2
    },
    {
        image: library2,
        cols: 2
    },
    {
        image: image7,
        cols: 2
    },
    {
        image: image8,
        cols: 2
    },
    {
        image: happyface,
        cols: 2
    },
    {
        image: prayer,
        cols: 2
    },
    {
        image: Sports,
        cols: 2
    },
    { 
        image: bus,
        cols: 2
    },
    {
        image: class1,
        cols: 2
    },
    {
        image: class2,
        cols: 2
    },
    {
        image: class3,
        cols: 2
    },
    {
        image: class4,
        cols: 1
    },
];


export default function Gallery() {

    return (<Container fluid className="project-section">

        <Container>
            <h1 className="project-heading">
                <strong className="purple">Gallery </strong>
            </h1>
            { <p style={{ color: "white" }}>
               WELCOME TO OUR BRIGHT ANGEL EDUCATION CENTRE GALLERY
            </p> }
            <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* the cols prop is the number of columns */}
            <ImageList rowHeight={700} cols={2}>
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