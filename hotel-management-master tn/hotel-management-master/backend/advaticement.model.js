/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

AdvaticeModel = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    email: {
      type: String,
    },
    category: {
      type: String,
    },

    info: {
      type: String,
    },
    package: {
      type: String,
    },
  },
  {
    collation: "advaticeModel",
  }
);

module.exports = mongoose.model("AdvaticeModel", AdvaticeModel);
