import mongoose from "mongoose";
import Superhero from "../models/superhero.js";

export const getHeroes = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Superhero.countDocuments({});

    const heroes = await Superhero.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: heroes,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getHero = async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Superhero.findById(id);

    res.status(200).json(hero);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHero = async (req, res) => {
  const superhero = req.body;

  const newSuperhero = new Superhero(superhero);
  try {
    await newSuperhero.save();

    res.status(201).json(newSuperhero);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateHero = async (req, res) => {
  const { id: _id } = req.params;
  const hero = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedHero = await Superhero.findByIdAndUpdate(
    _id,
    { ...hero, _id },
    {
      new: true,
    }
  );

  res.json(updatedHero);
};

export const deleteHero = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await Superhero.findByIdAndRemove(id);

  res.json({ message: "Hero deleted successfully" });
};
