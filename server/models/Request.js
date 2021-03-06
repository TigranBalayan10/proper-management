const { Schema } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

const dateFormat = (date) => {
  return date.toLocaleDateString('en-US');
};


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
  unitNumber: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

module.exports = requestSchema;
