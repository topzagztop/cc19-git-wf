const express = require("express");
const app = express();

app.post("/api/register", (req, res, next) => {
  res.json({ mes: "hello registerrrrrrrrrrrr" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on, ${port}`));
