// packages
const { Router } = require("express");

// controllers
const {
  createBook,
  getAllBooks,
  getOneBook,
  editBook,
  deleteBook,
} = require("../controllers/book.controller");

// router
const router = Router();

// endpoints
router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

// export
module.exports = router;
