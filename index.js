const express = require("express");
const { json } = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(json());
app.use(cors());
app.use("/predict", require("./routes/predict"));

app.use("/", (req, res) => {
  res.json({ success: true, path: "home" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
