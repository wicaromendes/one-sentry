const chalk = require("chalk");
const { spawn } = require('child_process');
const path = require('path');

let serverProcess = null;

const startServer = (OneSentryPath, OneSentryCommand) => {
    console.log(chalk.green(`[OneSentry] - Starting command: ${chalk.bgMagenta(OneSentryCommand)}`));
    const serverProcess = spawn(OneSentryCommand, { stdio: 'inherit', cwd:OneSentryPath, shell: process.platform == 'win32' });

    serverProcess.on('error', (error) => {
        console.log(chalk.red(`[OneSentry] - Error executing file ${error}`));
    });
};

const restartServer = (OneSentryCommand) => {
    if (serverProcess) {
        console.log(chalk.yellow('[OneSentry] - Restarting server...'));
        serverProcess.kill();
    }
    startServer(OneSentryPath, OneSentryCommand)
};

module.exports = { startServer, restartServer };
