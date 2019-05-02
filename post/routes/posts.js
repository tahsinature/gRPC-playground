var express = require('express');
var router = express.Router();
const { Post, } = require('../models');
/* GET home page. */
router.post('/', async function(req, res, next) {
  const posts = await Post.findAll({ where: { authorId: req.body.authorId, }, });
  res.send(posts);
});

module.exports = router;
