const extractToken = (req) => {
  if (req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query.token) {
    return req.query.token;
  }

  return null;
};

export { extractToken };
