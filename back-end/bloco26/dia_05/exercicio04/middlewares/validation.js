const isValidname = (req, res, next) => {
  const name = req.body;
  if (!name || name.length < 6)
    return res.status(400).json({ message: "invalid data" });
  next();
};
const isValidInitials = (req, res, next) => {
  const initials = req.body;
  if (!initials || initials.length > 3)
    return res.status(400).json({ message: "invalid data" });
  next();
};
const isValidCountry = (req, res, next) => {
  const country = req.body;
  if (!country || country.length < 4)
    return res.status(400).json({ message: "invalid data" });

  next();
};

module.exports = {
  isValidname,
  isValidInitials,
  isValidCountry,
};
