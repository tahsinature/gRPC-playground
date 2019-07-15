const db = require("../../../util/db");

module.exports = (call, cb) => {
  const { id } = call.request;
  const note = db.find(ele => ele.id === id);
  if (!note) {
    return cb(null, {
      success: false
    });
  }
  db.splice(db.indexOf(note), 1);
  cb(null, { success: true });
};
