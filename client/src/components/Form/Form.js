import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { createHero, updateHero } from "../../actions/heroes";

const Form = ({ currentId, setCurrentId }) => {
  const [heroData, setHeroData] = useState({
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    images: "",
  });

  const hero = useSelector((state) =>
    currentId ? state.heroes.heroes.find((h) => h._id === currentId) : null
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    if (hero) setHeroData(hero);
  }, [hero]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateHero(currentId, heroData));
    } else {
      dispatch(createHero(heroData, history));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setHeroData({
      nickname: "",
      realName: "",
      originDescription: "",
      superpowers: "",
      catchPhrase: "",
      images: "",
    });
  };

  return (
    <Container>
      <Paper className={classes.paper} elevation={6}>
        <form
          autoComplete="off"
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating"} a superhero
          </Typography>
          <TextField
            name="nickname"
            required
            variant="outlined"
            label="Nickname"
            fullWidth
            value={heroData.nickname}
            onChange={(e) =>
              setHeroData({ ...heroData, nickname: e.target.value })
            }
          />
          <TextField
            name="realName"
            variant="outlined"
            label="RealName"
            fullWidth
            value={heroData.realName}
            onChange={(e) =>
              setHeroData({ ...heroData, realName: e.target.value })
            }
          />
          <TextField
            name="originDescription"
            required
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            minRows={3}
            value={heroData.originDescription}
            onChange={(e) =>
              setHeroData({ ...heroData, originDescription: e.target.value })
            }
          />
          <TextField
            name="superpowers"
            required
            variant="outlined"
            label="superpowers"
            fullWidth
            value={heroData.superpowers}
            onChange={(e) =>
              setHeroData({ ...heroData, superpowers: e.target.value })
            }
          />
          <TextField
            name="catchPhrase"
            required
            variant="outlined"
            label="catchPhrase"
            fullWidth
            value={heroData.catchPhrase}
            onChange={(e) =>
              setHeroData({ ...heroData, catchPhrase: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setHeroData({ ...heroData, images: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Add superhero
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
