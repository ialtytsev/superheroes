import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { getHeroes } from "../../actions/heroes";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.heroes);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getHeroes(page));
  }, [dispatch, page]);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/heroes?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
