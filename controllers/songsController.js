const express = require("express");
const songs = express.Router();
const {
  getAllsongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
} = require("../queries/song");
const { checkName, checkBoolean } = require("../validations/checkSongs");

// READ ROUTE to read all resources.
songs.get("/", async (req, res) => {
  const allSongs = await getAllsongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// READ ROUTE to read a single resource.
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id);
  if (oneSong) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE ROUTE to create new resources.
songs.post("/", checkName, checkBoolean, async (req, res) => {
  const body = req.body;
  const song = await createSong(body);
  res.status(200).json(song);
});

// UPDATE ROUTE to update a single resource.
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedSong = await updateSong(id, body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

// DELETE ROUTE to delete a single resource.
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

module.exports = songs;