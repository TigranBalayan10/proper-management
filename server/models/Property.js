const { Schema, model } = require('mongoose');

const propertySchema = new Schema(
    {
        address: {
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
        tenant: {
            type: Schema.Types.ObjectId,
            ref: 'Tenant'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
)

module.exports = model("Property", propertySchema);