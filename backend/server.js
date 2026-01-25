const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact form API
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({ message: "Message saved successfully" });
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
