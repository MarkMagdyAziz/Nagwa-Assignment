const express = require('express');
const router = express.Router();

const { handleListWords } = require('../helpers/helper');

// List all 10 random word
router.get('/', async (req, res) => {
  try {
    // words list
    const words = await handleListWords();

    // handle success case
    res.status(200).send({
      success: true,
      msg: 'Get wordList successfully',
      data: words,
    });
  } catch (error) {
    // handle catch erorr
    res.status(401).send({
      success: false,
      msg: 'Error get wordList!',
      data: error,
    });
  }
});

module.exports = { wordsRouter: router };
