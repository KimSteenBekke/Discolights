const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    title: String,
    artist: String,
    label: String,
    trackSequence: Number,
    trackTitle: String,
    trackTime: Number,
    genre: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Album", albumSchema);
