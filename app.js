require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());


const filmsRoutes = require("./routes/films.routes.js")
app.use('/api/film',filmsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

console.log("API Key:", process.env.API_KEY);









