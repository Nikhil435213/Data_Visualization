const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var dataSchema = new Schema(
  {
    end_year: Number,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: Number,
    impact: Number,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
  },
  {
    collection: "jsondata",
  }
);

module.exports = mongoose.model("jsom", dataSchema);
