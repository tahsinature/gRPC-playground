require('./models');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const normalizedPath = require('path').join(__dirname, 'routes');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const postProtoPath = path.join(__dirname, '..', 'protos', 'post.proto');
const postProtoDefinition = protoLoader.loadSync(postProtoPath);
const postPackageDefinition = grpc.loadPackageDefinition(postProtoDefinition).post;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Queries
function getPosts(call, cb) {}
// function addComment(call, cb) {}
function removePost(call, cb) {}

function main() {
  const server = new grpc.Server();
  // gRPC service
  server.addService(postPackageDefinition.PostService.service, {
    getPosts,
    removePost,
  });

  // gRPC server
  server.bind('localhost:3002', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('gRPC server running at port: 3002');
}

main();

require('fs')
  .readdirSync(normalizedPath)
  .forEach(function(file) {
    app.use('/' + file.split('.js')[0], require('./routes/' + file));
  });

module.exports = app;
