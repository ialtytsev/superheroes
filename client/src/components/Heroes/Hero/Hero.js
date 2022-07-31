import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Link,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

import { deleteHero } from "../../../actions/heroes";

const Hero = ({ hero, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const openHero = () => {
    history.push(`/heroes/${hero._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={hero.images}
        title={hero.nickname}
      />
      <div className={classes.overlay}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(hero._id);
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent>
        <ButtonBase className={classes.cardAction} onClick={openHero}>
          <Link color="inherit">
            <Typography variant="h5" gutterBottom>
              {hero.nickname}
            </Typography>
          </Link>
        </ButtonBase>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            dispatch(deleteHero(hero._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Hero;
