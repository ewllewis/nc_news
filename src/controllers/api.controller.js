const endpointsJson = require("../../endpoints.json");

async function getAPIEndpoints(req, res, next) {
  try {
    res.status(200).send({ endpoints: endpointsJson });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAPIEndpoints,
};
