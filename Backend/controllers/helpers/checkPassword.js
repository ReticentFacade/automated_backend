import chalk from "chalk";

const pwLength = (password) => {
  try {
    if (password.length < 6 || password.length > 20) {
      console.log(
        "Oh, no bro! Password must be between 8 and 20 characters :)"
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error checking password length: ", err.message);
    throw new Error("Error checking password length");
  }
};

const pwCase = (password) => {
  try {
    const checkCase = /[a-z]/.test(password) && /[A-Z]/.test(password);

    if (!checkCase) {
      console.log(
        "Bro, password must contain at least one uppercase and one lowercase letter :p"
      );
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error checking password case: ", err.message);
    throw new Error("Error checking password case");
  }
};

const pwNumber = (password) => {
  try {
    const checkNumber = /[0-9]/.test(password);
    if (!checkNumber) {
      console.log("Bro, your password must contain at least one number -_-");
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error checking password number: ", err.message);
    throw new Error("Error checking password number");
  }
};

const pwSpecial = (password) => {
  try {
    const checkSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    if (!checkSpecial) {
      console.log(
        "Bro, your password must contain at least one special character ^.^"
      );
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error checking password special: ", err.message);
    throw new Error("Error checking password special");
  }
};

const pwSpace = (password) => {
  try {
    const checkSpace = /\s/.test(password);
    if (checkSpace) {
      console.log("Bro, your password must not contain any spaces -_-");
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error checking password space: ", err.message);
    throw new Error("Error checking password space");
  }
};

const pwUsername = (password, username) => {
  try {
    const checkUsername = password.includes(username);
    if (checkUsername) {
      console.log(
        "No no no bro, your password must not contain your username 🙁"
      );
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error checking password username: ", err.message);
    throw new Error("Error checking password username");
  }
};

const checkPwStrength = (password, username) => {
  try {
    const minLength = 6;
    const minScore = 50;

    let score = 0;
    if (pwLength(password)) score += 10;
    if (pwCase(password)) score += 10;
    if (pwNumber(password)) score += 10;
    if (pwSpecial(password)) score += 10;
    if (pwSpace(password)) score += 10;

    if (password.length >= minLength) score += 20;

    if (!pwUsername(password, username)) score += 30;

    // return score >= minScore ? "strong" : "weak";

    // Just tryna make it look prettier on the terminal:
    const strength = score >= minScore ? "strong" : "weak";

    switch (strength) {
      case "strong":
        console.log(chalk.green("Password strength: ", strength));
        break;
      case "medium":
        console.log(chalk.yellow("Password strength: ", strength));
        break;
      case "weak":
        console.log(chalk.red("Password strength: ", strength));
        break;
      default:
        console.log("Password strength: ", strength);
    }

    return strength;
  } catch (err) {
    console.log("Error checking password strength: ", err.message);
    throw new Error("Error checking password strength");
  }
};

const checkPassword = (password, username) => {
  try {
    const pwStrength = checkPwStrength(password);
    if (pwStrength === "strong") {
      if (pwUsername(password, username)) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.log("Error checking password: ", err.message);
    throw new Error("Error checking password");
  }
};

export default checkPassword;
