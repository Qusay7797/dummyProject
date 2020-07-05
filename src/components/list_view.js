import React from "react";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

// view items in a list view, loop through advs

//loop setup..
export default function AlignItemsList(props) {
  function titleName(title) {
    if (title.length > 20) {
      return title.slice(0, 20) + "...";
    } else {
      return title;
    }
  }

  const item = props.data;
  return (
    <div
      style={{
        border: "1px solid grey",
        display: "inline-block",
        width: 200,
        paddingLeft: 8,
      }}
    >
      <div
        style={{
          float: "left",
          paddingTop: 8,
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src={
              item && item.images && item.images.length > 0
                ? `https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/${item.s3Prefix}/${item.images[0].fileName}`
                : "https://d2udettvdk1u9q.cloudfront.net/250x156/smart/public/12785/no-photo"
            }
          />
        </ListItemAvatar>
      </div>
      <div>
        <ListItemText primary={titleName(item.title)} />
      </div>
    </div>
  );
}
