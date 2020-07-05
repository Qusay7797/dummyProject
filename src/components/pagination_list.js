import React from "react";
import CardDisplay from "./cards_view";
import AlignItemsList from "./list_view";
import GridList from "@material-ui/core/GridList";
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ViewLists(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      overflow: "hidden",
      paddingTop: 0,
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "95%",
      height: props.vType === "list" ? null : 700,
    },
  }));

  const classes = useStyles();
  if (props.load) {
    return <h1>loading...</h1>;
  }
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={props.vType === "list" ? 100 : 300}
        className={classes.gridList}
        cols={props.vType === "list" ? 4 : 3}
      >
        {props.data.map((item, key) => (
          <ListItem
            key={key}
            style={props.vType !== "list" ? { marginTop: 60 } : null}
          >
            {props.vType === "list" ? (
              <AlignItemsList data={item}></AlignItemsList>
            ) : (
              <CardDisplay data={item}></CardDisplay>
            )}
          </ListItem>
        ))}
      </GridList>
    </div>
  );
}
