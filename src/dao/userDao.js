const User = require("../models/user");

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error("Error saving user: " + error.message);
  }
};

const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const getUsers = async () => {
  try {
    return await User.find({ isDeleted: false });
  } catch (error) {
    throw new Error("Error finding users: " + error.message);
  }
};

const updateUser = async (userId, updateData) => {
  try {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true }
    );
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
