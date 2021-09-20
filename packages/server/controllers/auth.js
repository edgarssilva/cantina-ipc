var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    res.json({
      error: 'Campos obrigatórios não preenchidos!',
    });
    return;
  }

  res.json({
    test: 'Yo this is a test message!',
  });
});

module.exports = (app) => app.use('/auth', router);
