const chalk = require('chalk');
const chokidar = require('chokidar');
const path = require('path');
const { restartServer } = require('./ServerManager');

const WatchFile = (OneSentryPath, OneSentryCommand) => {
    const watcher = chokidar.watch(OneSentryPath, {
      ignored: /node_modules/,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 200,
        pollInterval: 100
      }
    });

    watcher.on('all', (evento, route) => {
    console.log(chalk.yellow(`[OneSentry] - The file ${path.relative(OneSentryPath, route)} has changed.`));
    restartServer(OneSentryPath, OneSentryCommand)
  });
}

module.exports = WatchFile