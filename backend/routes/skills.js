const express = require("express");
const router = express.Router();

// Skills Data
const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "PHP", value: 75 },
  { name: "SQL", value: 70 },
];

router.get("/", (req, res) => {
  res.json(skills);
});

module.exports = router;
