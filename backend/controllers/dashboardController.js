const Enrollment = require('../models/Enrollment');

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const enrollments = await Enrollment.find({ user: userId });

    const enrolledCourses = enrollments.length;
    const completedCourses = enrollments.filter(e => e.completed).length;
    const hoursLearned = enrollments.reduce(
      (sum, e) => sum + e.hoursLearned,
      0
    );
    const certificates = completedCourses;

    res.json({
      enrolledCourses,
      completedCourses,
      hoursLearned,
      certificates,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dashboard stats' });
  }
};
