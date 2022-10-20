import User from "../models/User.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "fs@fs" });

  if (userFound) return;

  const newUser = new User({
    username: "fullstack",
    email: "fs@fs",
  });

  newUser.password = await newUser.encryptPassword("1234");

  const admin = await newUser.save();

  console.log("Admin usuario creado", admin);
};
