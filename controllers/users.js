const User = require("../models/User");

// @desc        Get all users
// @route       GET /api/users
// @access      Private
exports.getUsers = async (req, res, next) => {
  try {
    // Getting users from DB
    const users = await User.find();

    // Sending success response
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    // Sending error response
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Get single user
// @route       GET /api/users/:id
// @access      Private
exports.getUser = async (req, res, next) => {
  try {
    // Getting a single user from DB
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(400).json({
        success: false,
      });
    }

    // Sending success response
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Sending error response
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Create new user
// @route       POST /api/users
// @access      Private
exports.createUser = async (req, res, next) => {
  try {
    // Creating a user in DB
    const user = await User.create(req.body);

    if (!user) {
      res.status(400).json({
        success: false,
      });
    }

    // Sending success response
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Sending error response
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Update single user
// @route       PUT /api/users/:id
// @access      Private
exports.updateUser = async (req, res, next) => {
  try {
    // Uodating a user in DB
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(400).json({
        success: false,
      });
    }

    // Sending success response
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Sending error response
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Delete single user
// @route       POST /api/users/:id
// @access      Private
exports.deleteUser = async (req, res, next) => {
  try {
    // Uodating a user in DB
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(400).json({
        success: false,
      });
    }

    // Sending success response
    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (error) {
    // Sending error response
    res.status(400).json({
      success: false,
    });
  }
};
