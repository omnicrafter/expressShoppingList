const express = require("express");
const router = new express.Router();
const items = require("./fakeDb.js");

// GET /items - should render a list of shopping items.
router.get("/", (req, res) => {
  if (items.length === 0) {
    return res.send("There are no items!");
  }
  return res.send(items);
});

// POST /items - should accept JSON data and add it to the shopping list.
router.post("/", (req, res) => {
  const item = req.body;
  items.push(item);
  return res.send(`Successfully added item: ${item.name}, $${item.price}`);
});

// GET /items/:name - should display a single item's name and price.
router.get("/:name", (req, res) => {
  const item = req.params.name;
  if (items.length === 0) {
    return res.send("There are no items!");
  }
  if (!items.includes(item)) {
    return res.send("Item not found!");
  }
  if (items.includes(item)) {
    return res.send(item.name, item.price);
  }
});

// PATCH /items/:name - should modify a single item's name and/or price.
router.patch("/:name", (req, res) => {});

// DELETE /items/:name = should allow you to delete a specific item from the array.
router.delete("/:name", (req, res) => {});

module.exports = router;
