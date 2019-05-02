const express = require('express');
const router = express.Router();
const m = require('../models');
const { User, } = m;
const { default: axios, } = require('axios');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.send(users);
});

router.get('/:id', async function(req, res, next) {
  const user = await User.findByPk(req.params.id);
  res.send(user);
});

router.get('/:id/posts', async function(req, res, next) {
  const user = await User.findByPk(req.params.id);
  const posts = await axios.post('http://localhost:3002/posts', { authorId: req.params.id, }).catch(err => {
    console.log(err.message);
  });
  const clonedUser = user.dataValues;
  clonedUser.posts = posts.data;
  res.send(clonedUser);
});

module.exports = router;
