const uuidv1 = require('uuid/v1');
const client = require('./client');

client.list({}, (err, cb) => {
  if (!err) console.log(cb);
  else console.log(err.message);
});

// client.insert(
//   { id: uuidv1(), title: 'Note 2', content: 'Content 2' },
//   (err, cb) => {
//     if (!err) console.log(cb);
//     else console.log(err.message);
//   }
// );

// client.delete({ id: 2 }, (err, cb) => {
//   if (!err) console.log(cb);
//   else console.log(err.message);
// });
