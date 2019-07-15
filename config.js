module.exports = {
  appPort: "3000",
  grpcPort: "3001",
  publicIp: !(process.env.NODE_ENV === "production") ? "127.0.0.1" : undefined
};
