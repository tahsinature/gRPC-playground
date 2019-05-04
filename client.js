const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const notesProto = protoLoader.loadSync('notes.proto');
const {
  NoteService: notesProtoServiceDefiinition
} = grpc.loadPackageDefinition(notesProto);
const { service: notesProtoService } = notesProtoServiceDefiinition;
const client = new notesProtoServiceDefiinition(
  '127.0.0.1:50051',
  grpc.credentials.createInsecure()
);

module.exports = client;
