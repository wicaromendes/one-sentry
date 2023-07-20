const chalk = require("chalk");
const { spawn } = require('child_process');
const path = require('path');
const terminate = require('terminate');

let serverProcess = null;

const startServer = (OneSentryPath, OneSentryCommand) => {
    console.log(chalk.green(`[OneSentry] - Starting command: ${chalk.bgMagenta(OneSentryCommand)}`));
    serverProcess = spawn(OneSentryCommand, { stdio: 'inherit', cwd:OneSentryPath, shell: process.platform == 'win32' });

    serverProcess.on('error', (error) => {
        console.log(chalk.red(`[OneSentry] - Error executing file ${error}`));
    });
};

const restartServer = (OneSentryPath, OneSentryCommand) => {
    console.log(chalk.yellow('[OneSentry] - Restarting server...'));
    if(serverProcess){
        terminate(serverProcess.pid, function (err) {
            if (err) { // you will get an error if you did not supply a valid process.pid
                console.log(chalk.red(`[OneSentry] - Error executing file ${err}`)); // handle errors in your preferred way.
            }
            else {
                console.log(chalk.yellow('[OneSentry] - Server restarted...'));
                startServer(OneSentryPath, OneSentryCommand)
            }
        });
    }else{
        startServer(OneSentryPath, OneSentryCommand)
    }
};

module.exports = { startServer, restartServer };
