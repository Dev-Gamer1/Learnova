const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { getUserProfile } = require('../controllers/userController');

const { getDashboardStats } = require('../controllers/dashboardController');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// 🔐 Protected route (GET)
router.get('/profile', protect, getUserProfile);
router.get('/dashboard-stats', protect, getDashboardStats);

module.exports = router;
router.get('/profile', protect, getUserProfile);
router.get('/dashboard-stats', protect, getDashboardStats);

