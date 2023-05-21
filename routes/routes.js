const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const db = require('../db/db');

// Initialize the database before handling any requests
db.initDb((err, _) => {
  if (err) {
    console.error('Error initializing database:', err);
  } else {
    console.log('Database initialized successfully');
  }
});

// GET /books - Retrieve all books
router.get('/', controller.getAllBooks);

// POST /books - Add a new book
router.post('/', controller.addBook);

module.exports = router;
