const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

// Test DB connection and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection failed:', err);
});