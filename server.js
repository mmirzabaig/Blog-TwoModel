const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('This is your blog app')
});




app.listen(3000, () => {
  console.log('Your App is LIVE!');
});
