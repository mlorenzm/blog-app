const express = require("express");
const app = express();
const blogsRouter = require("./controllers/blogs.js");
const cors = require("cors");
const mongoose = require("mongoose");
const MONGODB_URI = require("./utils/config.js").MONGODB_URI;
const PORT = require("./utils/config.js").PORT;

const mongoUrl = MONGODB_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());
app.use(blogsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
