const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "zidan") {
    req.user = { name: "zidan", authorized: true };
    next();
  } else {
    res.status(401).send(`<h1>Unauthorized</h1>`);
  }
};

module.exports = authorize;
