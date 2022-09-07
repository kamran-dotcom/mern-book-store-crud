const { json } = require("express");
const express = require("express");
const router = express.Router();

const Book = require('../model/Book');

const bookController = require('../controllers/book-controller');


router.get('/', bookController.getAllBooks);
router.post('/',bookController.addBook);
router.get('/:id',bookController.getById);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);
// router.post('/add-book',bookController.addBook);

module.exports = router;