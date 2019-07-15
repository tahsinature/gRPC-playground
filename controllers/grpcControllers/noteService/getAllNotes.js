const db = require("../../../util/db");

module.exports = (call, cb) => {
  cb(null, { notes: db });
};
