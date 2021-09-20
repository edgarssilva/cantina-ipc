var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());

require('./controllers/auth')(app);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!');
});
