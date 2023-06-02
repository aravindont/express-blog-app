require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectToDB = require("./config/db.connect");
connectToDB();
const blogRoutes = require("./routes/blog.routes");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRoutes);
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});
