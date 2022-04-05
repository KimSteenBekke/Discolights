const { Schema, model } = require("mongoose");

const track = new Schema({
  trackSequence: Number,
  trackTitle: String,
  trackTime: Number,
});

const album = new Schema(
  {
    title: String,
    artist: String,
    label: String,
    catalog: String
    genre: String,
    tracks: [track],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Album", album);
