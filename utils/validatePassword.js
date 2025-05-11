const bcrypt = require("bcryptjs");

const validatePassword = async (inputPassword, storedPassword) => {
  try {
    const isMatch = await bcrypt.compare(inputPassword, storedPassword);
    return isMatch;
  } catch (err) {
    throw new Error("Error validating password");
  }
};

module.exports = validatePassword;
