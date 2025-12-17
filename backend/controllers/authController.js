const User = require('../models/user');
const jwt = require('jsonwebtoken');

// REGISTER USER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(req.body); // DEBUG LINE

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await User.create({ name, email, password });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('REGISTER ERROR:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// LOGIN USER
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('LOGIN ERROR:', error.message);
    res.status(500).json({ error: error.message });
  }
};

//Forget Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // simple reset token
    const resetToken = Math.random().toString(36).substring(2, 15);

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins
    await user.save();

    // For prototype: return token in response
    res.json({
      message: 'Password reset token generated',
      resetToken: resetToken,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  // GET User  profile
  exports.getUserProfile = async (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
};

};
