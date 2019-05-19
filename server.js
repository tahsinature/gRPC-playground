const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("notes.proto"); // If I take service directly from here, I dont need to call .service.
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const { NoteService } = protoDescriptor;

const notes = [
  { id: "1", title: "Note 1", content: "Content 1" },
  { id: "2", title: "Note 2", content: "Content 2" }
];

const server = new grpc.Server();
server.addService(NoteService.service, {
  list: (_, cb) => {
    cb(null, { notes });
  },
  insert: (_, cb) => {
    const note = _.request;
    notes.push(note);
    cb(null, note);
  },
  delete: (_, cb) => {
    const id = _.request.id;
    const item = notes.find(ele => ele.id === id);
    if (item) {
      notes.splice(notes.indexOf(item), 1);
    }
    cb(null, { success: item ? true : false });
  }
});
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
console.log("Server running at: 127.0.0.1:50051");
server.start();
