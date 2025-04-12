const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    tel: {
      type: String,
    },
    bloodgroup: {
      type: String,
    },
    weight: {
      type: Number,
    },
    date: {
      type: String,
    },
    diseases: {
      type: String,
    },
    age: {
      type: Number,
    },
    bloodpressure: {
      type: Number,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prospect", ProspectSchema);
