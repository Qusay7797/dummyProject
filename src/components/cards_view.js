import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push(`/adv/${item.id}`);
  }
  function titleName(title) {
    if (title.length > 20) {
      return title.slice(0, 20) + "...";
    } else {
      return title;
    }
  }
  function descName(desc) {
    if (desc.length > 180) {
      return desc.slice(0, 180) + "...";
    } else {
      return desc;
    }
  }
  const item = props.data;

  return (
    <Card key={item.key} className={classes.root}>
      <CardActionArea
        onClick={() => {
          handleClick();
        }}
      >
        <CardMedia
          component="img"
          alt="Adv image"
          height="140"
          image={
            item && item.images && item.images.length > 0
              ? `https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/${item.s3Prefix}/${item.images[0].fileName}`
              : "https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/12785/no-photo"
          }
          title="places"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titleName(item.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descName(item.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
