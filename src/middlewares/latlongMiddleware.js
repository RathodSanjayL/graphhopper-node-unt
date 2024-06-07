function latLongMiddleware(req, res, next) {
  const { from, to } = req.query;

  const [fromLat, fromLong] = from.split(",");
  const [toLat, toLong] = to.split(",");

  req.data = {
    from: [fromLong, fromLat],
    to: [toLong, toLat],
  };

  next();
}

export { latLongMiddleware };
