const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Docker application is running');
});

app.listen(3001, () => {
  console.log(`server running on port 3001`);
});  