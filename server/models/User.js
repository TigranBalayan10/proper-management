const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const propertySchema = require('./Property');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    role: {
      type: String,
      required: true,
      enum: ['OWNER', 'TENANT']
    },
    // if owner can add a property from the dashboard
    properties: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property'
      }
    ]
  }
)

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// userSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });

module.exports = model('User', userSchema);
