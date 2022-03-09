import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: {
    type:String
  },
  read: {
    type:Boolean,
    default:false
  }
},{
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

export{
  Book
}