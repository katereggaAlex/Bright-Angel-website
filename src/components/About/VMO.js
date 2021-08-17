import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 3455,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
     display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba( 0.14)",
  borderRadius: "3px",
  color: "rgba( 0.87)",
  background: "white",
   
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const cards = [
  {
    image:"https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/vision.jpg?alt=media&token=46d7c86f-ec64-4185-8c2d-f7077419e2af",
    title:"Our VISION",
    description:"To be a leading school in provision of all round education.",

  }, 
  {
    image:"https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/mission.jpg?alt=media&token=7d46b261-9680-4a74-a630-bc1b1fa50782",
    title:"Our MISSION",
    description:"To produce an integrated, effective and a balanced child who is academically and  religiously sound.",

  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/prayer.jpg?alt=media&token=2e350bcb-6c08-46b9-b185-d8de762ebd95",
    title:" Our OBJECTIVES",
    description:"To equip young people with valuable life skills.Provision of quality education.Grooming and nurturing talents",

  }];

export default function VMO() {
  const classes = useStyles();

  return (
    <Container style={{ justifyContent: "center", paddingBottom: "10px" }} className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} direction="row"
  justifyContent="center"
  alignItems="center">
            {cards.map(({ image, title, description,card }) => (
              <Grid item key={card} xs sm={4} md={6} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>
                      {description}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    
  );
}
