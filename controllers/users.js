// @desc        Get all users
// @route       GET /api/users
// @access      Private
exports.getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Getting all users",
  });
};

// @desc        Get single user
// @route       GET /api/users/:id
// @access      Private
exports.getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Getting a specific user with id of ${req.params.id}`,
  });
};

// @desc        Create new user
// @route       POST /api/users
// @access      Private
exports.createUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Adding a new user`,
  });
};

// @desc        Update single user
// @route       PUT /api/users/:id
// @access      Private
exports.updateUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Updating a specific user with id of ${req.params.id}`,
  });
};

// @desc        Delete single user
// @route       POST /api/users/:id
// @access      Private
exports.deleteUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Deleting a specific user with id of ${req.params.id}`,
  });
};
