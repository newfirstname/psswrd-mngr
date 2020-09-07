const express = require('express');
const UserName = require('../models/UserName');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const users = await UserName.find();

  res.status(200).json(users);
});

router.get('/:id', async (req, res, next) => {
  const user = await UserName.findById(req.params.id);

  if (!user) {
    res.status(404).json({
      msg: 'not found',
    });
  }

  res.status(200).json(user);
});

router.post('/', async (req, res, next) => {
  console.log(req.body);

  const newUser = await UserName.create(req.body);

  res.status(200).json(newUser);
});

router.delete('/clear', (req, res) =>
  res.status(400).json({ msg: "haha, can't clear" })
);

router.delete('/:id', async (req, res, next) => {
  await UserName.findByIdAndDelete(req.params.id);

  res.status(200).json({});
});

module.exports = router;
