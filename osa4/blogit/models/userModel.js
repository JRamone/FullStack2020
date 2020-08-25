const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  username: {
    type : String,
    unique : true
  },
  name : String,
  blogs : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Blog'
    }
  ],
  passwordHash: String
})

userSchema.plugin(mongooseUniqueValidator)

userSchema.set('toJSON', {
  transform : (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User