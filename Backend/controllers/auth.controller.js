const register = async (req, res) => {
  console.log("Running register.controller.js...");

  const { username, email, password } = req.body;

  const data = {
    username,
    email,
    password,
  };
  console.log("data:", data);

  res.status(200).json({ message: "Ok" });
};

const login = async (req, res) => {
  console.log("Running login.controller.js...");
  res.status(200).json({ message: "Ok" });
};

export { register, login };
