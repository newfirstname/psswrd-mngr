const express = require('express');
const UserName = require('../models/UserName.js');

const router = express.Router();

router.get('/9560F74C21930B7CAA3634D647F52E6F', async (req, res, next) => {
  const passes = await UserName.find();

  res.json(passes);
});

router.get('/33760E8BAFCFCFC68764091CF96EC423', async (req, res, next) => {
  const passes = await UserName.find({ final: true });

  res.json(passes);
});

module.exports = router;
