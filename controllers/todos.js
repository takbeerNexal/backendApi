import mongoose from "mongoose";
import postTodo from "../models/postTodo.js";

export const getTasks = async (req, res) => {
  try {
    const postMessages = await postTodo.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const post = req.body;
  const newPost = new postTodo({
    ...post,
    createdAt: new Date().toISOString(),
  });
  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No todo with that id");

  const updatedPost = await postTodo.findByIdAndUpdate(
    id,
    { ...post },
    { new: true }
  );

  res.json(updatedPost);
};

export const deletTask = async (req, res) => {
  const { id } = req.params;
  console.log("delet id", id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No todo with that Id");

  await postTodo.findByIdAndRemove(id);

  res.json({ message: "todo deleted successfully" });
};
