import React, { useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import Heroes from "../../components/Heroes/Heroes";
import Form from "../../components/Form/Form";
import Pagination from "../../components/Pagination/Pagination";

import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const page = query.get("page") || 1;

  return (
    <>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            className={classes.gridContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Heroes setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Container maxWidth="xl" className={classes.pagination}>
        <Pagination color="primary" page={page} />
      </Container>
    </>
  );
};

export default Home;
