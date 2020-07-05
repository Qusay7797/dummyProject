import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers.length}
        onChange={(e, p) => paginate(p)}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
