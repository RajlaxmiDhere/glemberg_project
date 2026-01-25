const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// ✅ VERY IMPORTANT
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       // put password if you have one
  database: "glemberg_db",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// TEST ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// CONTACT API
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
    } else {
      res.status(200).send("Message saved");
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
