require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */
app.use(cors({
  origin: "*",        // allow all frontends
  methods: ["GET", "POST"],
}));
app.use(express.json());

/* ================= MYSQL CONNECTION ================= */
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected");
});

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Glemberg Backend is Running");
});

/* ================= CONTACT FORM API ================= */
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err) => {
    if (err) {
      console.error("❌ Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({ message: "Message stored successfully" });
  });
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
