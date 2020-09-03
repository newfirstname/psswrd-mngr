const express = require('express');
const UserName = require('../models/UserName.js');

const router = express.Router();

router.get('/passes', async (req, res, next) => {
  const passes = await UserName.find();

  res.json(passes);
});

router.get('/finals', async (req, res, next) => {
  const passes = await UserName.find({ final: true });

  res.json(passes);
});

module.exports = router;
