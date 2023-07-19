const Monitoring = require('./actions/Monitoring/OneSentryMonitoring');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const currentDirectory = process.cwd().replace('/\\/g','/');
const OneSentryPath = path.join(currentDirectory, 'Sentry.json');

if (!fs.existsSync(OneSentryPath)) {
    console.log(chalk.red("[OneSentry] - The OneSentry configuration file was not created in the root of the project. Create the file and try again."))
    console.log(chalk.red("[OneSentry] - Documentation: https://www.npmjs.com/package/sendrex"))
}else{
    Monitoring(OneSentryPath)
}

