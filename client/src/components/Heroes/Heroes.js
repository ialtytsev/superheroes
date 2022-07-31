import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Hero from "./Hero/Hero";

const Heroes = ({ setCurrentId }) => {
  const { heroes, isLoading } = useSelector((state) => state.heroes);

  if (!heroes.length && !isLoading) return "No posts:(";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {heroes.map((hero) => (
        <Grid key={hero._id} item xs={12} md={6} lg={4}>
          <Hero hero={hero} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Heroes;
