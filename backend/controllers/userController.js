exports.getUserProfile = async (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
};
