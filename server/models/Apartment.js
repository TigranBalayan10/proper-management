const { Schema, model } = require('mongoose');

const apartmentSchema = new Schema(
    {
        number: {
            type: Number,
            required: true,
            trim: true
        },
        property: {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        },
        tenant: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

module.exports = model("Apartment", apartmentSchema);