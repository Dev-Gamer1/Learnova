const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const connectDB = require('./config/db.config');

const app = express();
const PORT = process.env.PORT || 5000;

// --------------------
// Middleware
// --------------------
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// --------------------
// Connect MongoDB
// --------------------
connectDB();

// --------------------
// Routes
// --------------------
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollRoutes = require('./routes/enrollRoutes');

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enroll', enrollRoutes);

// --------------------
// Health Check
// --------------------
app.get('/', (req, res) => {
  res.status(200).send('🚀 Learnova API is running');
});

// --------------------
// Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
