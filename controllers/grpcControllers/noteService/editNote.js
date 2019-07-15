const db = require("../../../util/db");

module.exports = (call, cb) => {
  const { id, new_body: newBody } = call.request;
  const note = db.find(ele => ele.id === id);

  if (!note) return cb({ message: "No note found with this id" });
  note.body = newBody;
  cb(null, note);
};
