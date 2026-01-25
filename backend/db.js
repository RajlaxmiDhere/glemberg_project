const mysql = require("mysql2");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD",
  database: "glemberg_db"
});

// Connect
db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;

