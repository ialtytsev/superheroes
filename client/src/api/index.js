import axios from "axios";

// const url = "http://localhost:5000/heroes";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchHero = (id) => API.get(`/heroes/${id}`);
export const fetchHeroes = (page) => API.get(`/heroes?page=${page}`);
export const createHero = (newHero) => API.post("/heroes", newHero);
export const updateHero = (id, updatedHero) =>
  API.patch(`/heroes/${id}`, updatedHero);
export const deleteHero = (id) => API.delete(`/heroes/${id}`);
