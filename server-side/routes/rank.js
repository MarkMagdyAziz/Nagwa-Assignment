const express = require('express');
const router = express.Router();

const { handleRankOfScore } = require('../helpers/helper');

// Rank
router.post('/', async (req, res) => {
  const studentScore = req.query.score;
  console.log('rank:');

  try {
    // Handle success case
    const rank = await handleRankOfScore(studentScore);
    console.log('rank:');
    res.status(200).send({
      success: true,
      msg: 'Get rank successfully',
      rank: rank,
    });
  } catch (error) {
    // Handle Error case
    res.status(401).send({
      success: false,
      msg: 'Error get rank!',
      data: error,
    });
  }
});

module.exports = { rankRouter: router };
