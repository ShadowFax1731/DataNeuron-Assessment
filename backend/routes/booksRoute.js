import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();
let addAPICallCount = 0, updateAPICallCount = 0;
// Route for Save a new Book
router.post('/', async (request, response) => {


  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    if (!response.ok) response.status(500).send({ message: error.message });


    return response.status(201).send({ book, addAPICallCount: addAPICallCount++ });
  } catch (error) {
    console.log(error.message);
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
      updateAPICallCount,
      addAPICallCount
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    if (!response.ok) response.status(500).send({ message: error.message });


    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {

  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    if (!response.ok) response.status(500).send({ message: error.message });


    return response.status(200).send({ message: 'Book updated successfully', updateAPICallCount: updateAPICallCount++ });
  } catch (error) {
    console.log(error.message);
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    if (!response.ok) response.status(500).send({ message: error.message });


    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
