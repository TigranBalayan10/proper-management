const { Schema, model } = require('mongoose');
const requestSchema = require('./Request');

const propertySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },
        numberOfApartments: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        zip: {
            type: String,
            required: true,
            trim: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        requests: [requestSchema]
    }
)

module.exports = model("Property", propertySchema);