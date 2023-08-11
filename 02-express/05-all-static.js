const express = require('express');
const app = express();
const port = 3000;

// setup static and middleware
app.use(express.static('./public'));

// using static assets in above as default get
// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "public", "index.html"));
// });

app.all('*', (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
