const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
console.log('listening for request on port 3000');
});
app.get('/', (req, res) => {
res.send("app is running")
});
