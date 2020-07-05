import React from "react";
import SimpleListMenu from "./advMenu";
import VerticalToggleButtons from "./display_toggle";
import Grid from "@material-ui/core/Grid";
export default function PrefHeader(props) {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item sm={12} md={6}>
        <div>
          <SimpleListMenu onChoose={props.onChoose}></SimpleListMenu>
        </div>
      </Grid>
      <Grid item sm={12} md={6}>
        <div style={{ textAlign: "center" }}>
          <VerticalToggleButtons layout={props.layout}></VerticalToggleButtons>
        </div>
      </Grid>
    </Grid>
  );
}
