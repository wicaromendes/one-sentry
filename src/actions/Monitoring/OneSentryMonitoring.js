const fs = require('fs');
const { startServer } = require("./handlers/ServerManager");
const WatchFile = require("./handlers/WatchFile");

const Monitoring = (OneSentryPath) => {
  const OneSentryFile = fs.readFileSync(OneSentryPath, 'utf8');
  const OneSentryJSON = JSON.parse(OneSentryFile);

  WatchFile(OneSentryJSON.path, OneSentryJSON.command)
  startServer(OneSentryJSON.path, OneSentryJSON.command)
}

module.exports = Monitoring