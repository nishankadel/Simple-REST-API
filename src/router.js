const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("./Post");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find({});
    if (!post) throw Error("No post Found");
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById({ _id: id });
    if (!post) throw Error("No post Found");
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) throw Error("Something went wrong while deleting post");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body);
    if (!post) throw Error("Something went wrong while updating post");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});
module.exports = router;
