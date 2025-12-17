const express = require('express');
const router = express.Router();
const { getAllCourses } = require('../controllers/courseController');

// Public route (users can browse courses)
router.get('/', getAllCourses);

module.exports = router;
