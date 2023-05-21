const db = require('../db/db');

// GET /books - Get all books
const getAllBooks = async (req, res) => {
  try {
    const booksCollection = db.getDb().collection('books'); // Remove "bookstore"
    const books = await booksCollection.find().toArray();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

// POST /books - Add a new book
const addBook = async (req, res) => {
  const { title, author, genre } = req.body;

  try {
    const booksCollection = db.getDb().collection('books');
    await booksCollection.insertOne({ title, author, genre });
    res.send('Book added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

module.exports = {
  getAllBooks,
  addBook,
};
