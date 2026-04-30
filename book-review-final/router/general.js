const express = require("express");
const axios = require("axios");
const books = require("./booksdb");

const router = express.Router();
const API_BASE_URL = "http://localhost:5000";

router.get("/", (req, res) => {
  return res.status(200).json(books);
});

router.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found." });
  }

  return res.status(200).json(book);
});

router.get("/author/:author", (req, res) => {
  const author = req.params.author.toLowerCase();
  const matches = Object.fromEntries(
    Object.entries(books).filter(([, book]) => book.author.toLowerCase() === author)
  );

  return res.status(200).json(matches);
});

router.get("/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();
  const matches = Object.fromEntries(
    Object.entries(books).filter(([, book]) => book.title.toLowerCase() === title)
  );

  return res.status(200).json(matches);
});

router.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found." });
  }

  return res.status(200).json(book.reviews);
});

async function getAllBooks(callback) {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    callback(null, response.data);
  } catch (error) {
    callback(error);
  }
}

function getBookByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_BASE_URL}/isbn/${isbn}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

async function getBooksByAuthor(author) {
  const response = await axios.get(`${API_BASE_URL}/author/${encodeURIComponent(author)}`);
  return response.data;
}

async function getBooksByTitle(title) {
  const response = await axios.get(`${API_BASE_URL}/title/${encodeURIComponent(title)}`);
  return response.data;
}

module.exports = router;
module.exports.getAllBooks = getAllBooks;
module.exports.getBookByISBN = getBookByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
