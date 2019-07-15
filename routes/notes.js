const express = require("express");
const router = express.Router();
const db = require("../util/db");

router.get("/", (req, res, next) => {
  res.json(db);
});

router.post("/", (req, res, next) => {
  const newNote = { id: db.length + 1, body: req.body.body };
  db.push(newNote);
  res.json({ success: true });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { new_body: newBody } = req.body;
  const note = db.find(ele => ele.id === id);

  if (!note)
    return res.status(404).json({ message: "No note found with this id" });
  note.body = newBody;
  res.json(note);
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const note = db.find(ele => ele.id == id);
  if (!note) {
    return res.status(404).json({
      success: false
    });
  }
  db.splice(db.indexOf(note), 1);
  res.json({ success: true });
});

module.exports = router;
