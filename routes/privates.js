const express = require('express');
const UserName = require('../models/UserName.js');

const router = express.Router();

router.get('/passes', async (req, res, next) => {
  const passes = await UserName.find();

  res.json(passes);
});

module.exports = router;
