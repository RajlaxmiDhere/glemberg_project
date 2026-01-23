const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // This allows your React app to talk to the server
app.use(express.json()); // This allows the server to read JSON data

// 1. Connect to MongoDB (Replace with your connection string)
const MONGO_URI = "mongodb://localhost:27017/glemberg_db"; 

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 2. Define the Data Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// 3. The POST Route to save data
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newEntry = new Contact({ name, email, phone, message });
    await newEntry.save();
    res.status(201).json({ message: "Data saved to database!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
