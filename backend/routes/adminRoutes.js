const express = require('express');
const router = express.Router();

const { adminLogin } = require('../controllers/adminController');
const { adminProtect } = require('../middleware/adminMiddleware');
const { getAllUsers } = require('../controllers/adminUserController');
const {
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/adminCourseController');

const { getAllEnrollments } = require('../controllers/adminEnrollmentController');

const { getAllPayments } = require('../controllers/adminPaymentController');

// 🔐 Admin login
router.post('/login', adminLogin);

// 📊 Admin dashboard test
router.get('/dashboard', adminProtect, (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

// 👥 View all users
router.get('/users', adminProtect, getAllUsers);

// 📚 Admin course management
router.post('/courses', adminProtect, addCourse);
router.put('/courses/:id', adminProtect, updateCourse);
router.delete('/courses/:id', adminProtect, deleteCourse);

// 📊 View all enrollments
router.get('/enrollments', adminProtect, getAllEnrollments);

// 💰 View all payments (Dummy)
router.get('/payments', adminProtect, getAllPayments);

module.exports = router;
