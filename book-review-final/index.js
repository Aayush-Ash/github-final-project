const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const books = require("./router/booksdb");
const general = require("./router/general");

const app = express();
const users = [];
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  session({
    secret: "book-review-final-secret",
    resave: false,
    saveUninitialized: true,
  })
);

const isValid = (username) => users.some((user) => user.username === username);
const authenticatedUser = (username, password) =>
  users.some((user) => user.username === username && user.password === password);

app.use("/", general);

app.post("/register", (req, res) => {
  const username = req.body.username || req.query.username;
  const password = req.body.password || req.query.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  if (isValid(username)) {
    return res.status(409).json({ message: "User already exists." });
  }

  users.push({ username, password });
  return res.status(201).json({ message: "User successfully registered. Now you can login." });
});

app.post("/customer/login", (req, res) => {
  const username = req.body.username || req.query.username;
  const password = req.body.password || req.query.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid login. Check username and password." });
  }

  const accessToken = jwt.sign({ username }, "access", { expiresIn: "1h" });
  req.session.authorization = { accessToken, username };
  return res.status(200).json({ message: "User successfully logged in.", token: accessToken });
});

app.put("/customer/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const review = req.body.review || req.query.review;
  const username = req.body.username || req.query.username || "registered_user";

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (!review) {
    return res.status(400).json({ message: "Review is required." });
  }

  books[isbn].reviews[username] = review;
  return res.status(200).json({ message: "The book review has been added/updated successfully.", book: books[isbn] });
});

function deleteReview(req, res) {
  const { isbn } = req.params;
  const username = req.body.username || req.query.username || "registered_user";

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  delete books[isbn].reviews[username];
  return res.status(200).json({ message: `Review for ISBN ${isbn} deleted`, book: books[isbn] });
}

app.delete("/customer/auth/review/:isbn", deleteReview);
app.delete("/review/:isbn", deleteReview);

app.listen(PORT, () => {
  console.log(`Book review server is running on port ${PORT}`);
});
