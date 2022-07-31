import * as api from "../api";

export const getHero = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchHero(id);

    dispatch({ type: "FETCH_HERO", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const getHeroes = (page) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchHeroes(page);

    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const createHero = (hero, history) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.createHero(hero);

    history.push(`/heroes/${data._id}`);
    dispatch({ type: "CREATE", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const updateHero = (id, hero) => async (dispatch) => {
  try {
    const { data } = await api.updateHero(id, hero);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHero = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    await api.deleteHero(id);
    dispatch({ type: "DELETE", payload: id });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};
