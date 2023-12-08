const User = require("../model/User");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "User found",
        user: user,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    } else {
      await Shop.findByIdAndDelete(userId);
      res.status(200).json({
        status: true,
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    } else {
      const updatedShop = await Shop.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: true,
        message: "User updated successfully",
        updatedShop: updatedShop,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { deleteUserById, getUserById, updateUserById };
