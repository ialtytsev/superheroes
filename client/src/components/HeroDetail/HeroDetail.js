import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getHero } from "../../actions/heroes";

import useStyles from "./styles";

const HeroDetail = () => {
  const { hero, isLoading } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getHero(id));
  }, [dispatch, id]);

  if (!hero) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h2" component="h2">
            {hero.nickname}{" "}
            <span className={classes.realName}>({hero.realName})</span>
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h4">
            Catchphrase: {hero.catchPhrase}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />

          <Typography variant="h4" component="h3">
            Description
          </Typography>
          <Typography variant="body1" component="p">
            {hero.originDescription}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="h5" component="h4">
            Superpowers: {hero.superpowers}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={hero.images} alt="" />
        </div>
      </div>
    </Paper>
  );
};

export default HeroDetail;
