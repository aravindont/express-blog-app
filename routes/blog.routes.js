const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

// Create a new blog
router.post("/", blogController.createBlog);

// Read all blogs
router.get("/", blogController.getAllBlogs);

// Read a specific blog
router.get("/:id", blogController.getBlogById);

// Update a blog
router.put("/:id", blogController.updateBlog);

// Delete a blog
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
