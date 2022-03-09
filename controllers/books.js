import { Book } from '../models/book.js'

function newBook(req,res){
  res.render('books/new')
}

function create(req,res){
  req.body.read = false
  Book.create(req.body)
  .then(()=>{
    res.redirect('/books')
  })
}

function index(req,res){
  Book.find({})
  .then(books => { 
    res.render('books/index',{
    books
    })
  })
}

function deleteBook(req,res){
  Book.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/books')
  })
}

export{
newBook as new,
create,
index,
deleteBook as delete
}