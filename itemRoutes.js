const express = require("express");
const router = new express.Router();
const items = require("./fakeDb.js");

// GET /items - should render a list of shopping items.
router.get("/", (req, res) => {
  if (items.length === 0) {
    return res.send("The list is empty!");
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
  if (items.length === 0) {
  }
  const foundItem = items.find((i) => i.name === req.params.name);
  if (foundItem) {
    return res.send(`${foundItem.name}, ${foundItem.price}`);
  }

  return res.send({ message: "Item not found!" });
});

// PATCH /items/:name - should modify a single item's name and/or price.
router.patch("/:name", (req, res) => {
  if (items.length === 0) {
    return res.json({ message: "There are no items!" });
  }

  const foundItem = items.find((i) => i.name === req.params.name);
  if (foundItem) {
    const newInfo = req.body;
    foundItem.name = newInfo.name;
    foundItem.price = newInfo.price;
    return res.json({ message: "Information updated successfully!" });
  }
  return res.json({ message: "Item to update was not found!" });
});

// DELETE /items/:name = should allow you to delete a specific item from the array.
router.delete("/:name", (req, res) => {});

module.exports = router;
