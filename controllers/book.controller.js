// models
const Book = require("../models/Book");

// services
const { checkObject } = require("../services/book.service");

// utils
const { bookUpdAllowedKeys } = require("../utils/index.js");

// createBook
const createBook = async (req, res) => {
  try {
    const { title, author, category, summary } = req.body;

    if (!title || !author || !category) {
      res.status(400).send({
        status: "Barcha ma'lumotlar mavjud emas.",
        ok: false,
      });
      return;
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).send({
      ok: true,
      savedBook,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      status: "Qandaydir ichki hatolik yuz berdi. Yana urinib ko'ring.",
    });
  }
};

// getAllBooks
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.status(200).send({
      ok: true,
      booksLength: allBooks.length,
      books: allBooks,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      status: "Qandaydir ichki hatolik yuz berdi. Yana urinib ko'ring.",
    });
  }
};

// getOneBook
const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({
        ok: false,
        status: "Barcha ma'lumotlar biriktirilmagan.",
      });
      return;
    }

    const book = await Book.findById(id);

    if (!book) {
      res.status(204).send({
        ok: false,
        status: "Bunday id li kitob mavjud emas.",
      });
      return;
    }

    res.status(200).send({
      ok: true,
      book,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      status: "Qandaydir ichki hatolik yuz berdi. Yana urinib ko'ring.",
    });
  }
};

// editBook
const editBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.body) {
      console.log(req.body);
      if (Object.keys(req.body).length < 1) {
        res.status(400).send({
          ok: false,
          status: "Ma'lumotlar yetarli emas.",
        });
        return;
      }
    }

    const existBook = await Book.findById(id);

    if (!existBook) {
      res.status(204).send({
        ok: false,
        status: "Bunday id li kitob mavjud emas.",
      });
      return;
    }

    const updBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).send({
      ok: true,
      updatedBook: updBook,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      status: "Qandaydir ichki hatolik yuz berdi. Yana urinib ko'ring.",
    });
  }
};

// deleteBook
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({
        ok: false,
        status: "Id topilmadi.",
      });
      return;
    }

    const existBook = await Book.findById(id);

    if (!existBook) {
      res.status(400).send({
        ok: false,
        status: "Bunday ID bilan kitob mavjud emas.",
      });
      return;
    }

    await Book.findByIdAndDelete(id);
    res.status(200).send({
      ok: true,
      status: "Muvaffaqiyatli o'chirildi.",
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      status: "Qandaydir ichki hatolik yuz berdi. Yana urinib ko'ring.",
    });
  }
};

module.exports = { createBook, getAllBooks, getOneBook, editBook, deleteBook };
