const userModel = require("../modals/user");

async function handleUserRegister(req, res) {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ message: "All feilds are required", data: null, success: false });
  }
  const UserExists = await userModel.findOne({ email });
  if (!UserExists) {
    const userData = await new userModel(req.body);
    const result = await userData.save();
    return res.status(200).json({
      message: "user Registered successfully",
      data: result,
      success: true,
    });
  }
  return res
    .status(401)
    .json({ message: "User Already Exists", data: null, success: false });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "All feilds are required", data: null, success: false });
  }
  const UserExists = await userModel.findOne({ email });
  if (!UserExists) {
    return res
      .status(404)
      .json({ message: "user not exists", data: null, success: false });
  }
  const validateUser = UserExists.password == password;
  if (!validateUser) {
    return res
      .status(403)
      .json({ message: "invalid credential", data: null, success: false });
  }
  return res
    .status(200)
    .json({ message: "login successfully", data: UserExists, success: true });
}

module.exports = {
  handleUserRegister,
  handleUserLogin,
};
