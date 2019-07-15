const { publicIp, grpcPort } = require("../config");
const { debugGRPC } = require("../util/debug");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = require("path").join(
  __dirname,
  "..",
  "util",
  "proto-files",
  "all.proto"
);
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const { Note } = protoDescriptor;
const noteServiceController = require("../controllers/grpcControllers/noteService");

const grpcServer = new grpc.Server();
grpcServer.addService(Note.CommonService.service, {
  GetAllNotes: noteServiceController.getAllNotes,
  MakeNote: noteServiceController.makeNote,
  RemoveNote: noteServiceController.removeNote,
  EditNote: noteServiceController.editNote
});

module.exports.kickGrpc = () => {
  grpcServer.bind(
    `${publicIp}:${grpcPort}`,
    grpc.ServerCredentials.createInsecure()
  );
  grpcServer.start();
  debugGRPC(`Listening on port ${grpcPort}`);
};
