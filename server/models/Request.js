const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const requestSchema = new Schema({
  moreInfo: {
    type: String,
    maxlength: 280,
  },
  type: {
    type: String,
    required: true,
    enum: ["Plumbing", "Electric", "Heating", "Carpentry", "Other"],
    default: "Other",
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

module.exports = requestSchema;
