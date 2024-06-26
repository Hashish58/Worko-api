const User = require("../models/userModel");

const getUsers = async () => {
  return await User.find();
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
