import React from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import store from "../reducers/root";
import { useDispatch } from "react-redux";

import { changeView } from "../actions/actions";
//toggle list or cards
export default function VerticalToggleButtons(props) {
  const dispatch = useDispatch();
  const views = store.getState();
  //const [view, setView] = React.useState(views.view);
  console.log(store.getState());
  const handleChange = (event, nextView) => {
    dispatch(changeView(nextView));
    //setView(nextView);
    props.layout(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={views.view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="cards" aria-label="cards">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
