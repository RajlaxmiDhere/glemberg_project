// ===============================
// IMPORTS
// ===============================
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// ===============================
// APP INITIALIZATION
// ===============================
const app = express();
const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================
app.use(cors({
  origin: "*",          // Allow requests from anywhere
  methods: ["GET", "POST"],
}));

app.use(express.json()); // To read JSON body

// ===============================
// DATABASE CONNECTION
// ===============================
const db = mysql.createConnection({
  host: process.env.DB_HOST,      // e.g. aws.connect.psdb.cloud
  user: process.env.DB_USER,      // PlanetScale username
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,  // glemberg_db
  ssl: {
    rejectUnauthorized: true
  }
});

// ===============================
// CONNECT TO DB
// ===============================
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected");
});

// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("Glemberg Backend is Running 🚀");
});

// ===============================
// CONTACT FORM API
// ===============================
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO contacts (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("❌ Insert Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({
      message: "Message saved successfully",
      id: result.insertId
    });
  });
});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
