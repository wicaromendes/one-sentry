const Monitoring = require('./actions/Monitoring/OneSentryMonitoring');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const currentDirectory = process.cwd()
const OneSentryPath = path.join(currentDirectory, 'sentry.json');

if (!fs.existsSync(OneSentryPath)) {
    console.log(chalk.red("[OneSentry] - The OneSentry configuration file (sentry.json) was not created in the root of the project. Create the file and try again."))
    console.log(chalk.red("[OneSentry] - Documentation: https://github.com/wicaromendes/one-sentry"))
}else{
    Monitoring(OneSentryPath)
}

