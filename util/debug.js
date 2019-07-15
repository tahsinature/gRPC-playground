const debug = require("debug");
debug.enable("server:*");

const namespaces = {
  debugApp: debug("server:app"),
  debugError: debug("server:error"),
  debugDB: debug("server:db"),
  debugRedis: debug("server:redis"),
  debugGRPC: debug("server:grpc"),
  debugController: debug("server:controller")
};

const allDebugKeys = Object.keys(namespaces);

allDebugKeys.forEach((singleDebugKey, index) => {
  debug.colors.unshift(index);
  namespaces[singleDebugKey].color = index;
});

module.exports = namespaces;
