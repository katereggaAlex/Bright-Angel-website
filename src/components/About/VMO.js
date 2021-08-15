import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function VMO() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="/"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/school-website-bright-angel.appspot.com/o/vision.jpg?alt=media&token=46d7c86f-ec64-4185-8c2d-f7077419e2af"
          title="Our Vision"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Our Vision
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           To be a leading school in provision of all round education.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
  );
}
