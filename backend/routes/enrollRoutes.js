const express = require('express');
const router = express.Router();
const { enrollCourse } = require('../controllers/enrollController');
const { protect } = require('../middleware/authMiddleware');

// Enroll user into course
router.post('/', protect, enrollCourse);

module.exports = router;
