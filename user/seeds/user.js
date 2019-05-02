const faker = require('faker');
const models = require('../models');
const { User, } = models;
const data = [];

for (let i = 0; i < 10; i++) {
  const schema = {
    name: faker.name.findName(),
  };
  data.push(schema);
}

User.bulkCreate(data)
  .then(() => {
    console.log(`${data.length} Users created`);
  })
  .catch(err => {
    console.log(err.message);
  });
