const { json } = require("express");
const Book = require("../model/Book");

// get book by ID

const getById = async(req,res)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    } catch(err)
    {
        console.log(err)
    }

    if(!book)
    {
        return res.status(404).json({message:"Data not found..."})
    }

    return res.status(201).json({book});
}

// get all books data  
const getAllBooks = async(req,res,next)=>{
    let books;

    try{
        books = await Book.find();
    } catch(err)
    {
        console.log(err);
    }

    if(!books)
    {
        return res.status(404).json({"message": "No Books Found"});
    }

    return res.status(200).json({books});
}

// add new book
const addBook = async(req,res,next)=>{
    const {name,author,description,price,image,available} = req.body;
    let book;
    try{
        book = new Book({
            // name: name,
            name,
            author,
            description,
            price,
            image,
            available
        })

        book.save();
    } catch(err)
    {
        console.log(err);
    }

    if(!book)
    {
        return res.status(500).json({message:"Unable to store.."});
    }

    return res.status(201).json({book});
}


// update record
const updateBook = async(req,res)=>{
    const id = req.params.id;
    const {name,author,description,price,image,available} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            image,
            available
        })

        book = book.save();
    } catch(err)
    {
        console.log(err);
    }

    if(!book)
    {
        return res.status(404).json({message:"Record not found against this ID.."})
    }

    return res.status(200).json({book});

}

//  delete Book
const deleteBook = async(req,res)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
        // book = await Book.findByIdAndDelete(id);
    }
    catch(err)
    {
        console.log(err);
    }
    if(!book)
    {
        return res.status(404).json({message:"Record not found against this ID.."});
    }
    return res.status(200).json({message:"Data deleted"});
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;