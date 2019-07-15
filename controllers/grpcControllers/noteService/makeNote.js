const db = require("../../../util/db");

module.exports = (call, cb) => {
  const newNote = { id: db.length + 1, body: call.request.body };
  db.push(newNote);
  cb(null, { success: true });
};
