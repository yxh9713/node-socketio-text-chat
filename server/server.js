const path = require('path');
const express = require('express');
const port = process.env.port || 3000;
let app = express();

const publicPath = path.join(__dirname + '/../public');
app.use(express.static(publicPath));


app.listen(port, () => {
	console.log(`server start on ${port}`);
});