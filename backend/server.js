const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());


// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// MongoDB Connection (UPDATED – NO DEPRECATED OPTIONS)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Test route
app.get('/', (req, res) => {
  res.send('Server is Connected & running');
});

// Insert Real Courses
const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);

//Enrollment
const enrollRoutes = require('./routes/enrollRoutes');
app.use('/api/enroll', enrollRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/api/users', userRoutes);

// Admin Authentication
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

