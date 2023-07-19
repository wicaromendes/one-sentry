# OneSentry

OneSentry is a tool that facilitates the development of Node.js based applications by automatically restarting the Node application when file changes in the directory are detected. It aims to enhance productivity and streamline the development process by eliminating the need for manual application restarts.

## Features

- Automatic restart: OneSentry monitors the directory for any file changes and automatically restarts the Node.js application, ensuring that the latest code changes take effect without manual intervention.
- Enhanced development workflow: With OneSentry, developers can focus on writing code and experimenting with different functionalities, knowing that the application will be automatically restarted whenever a file is modified.
- File change detection: OneSentry uses advanced file monitoring techniques to track modifications in the project directory, including additions, deletions, and modifications.
- Customizable configuration: OneSentry allows users to customize the monitoring behavior by specifying file extensions to include or exclude from the restart process, enabling fine-grained control over the application reloads.

## Installation

To install OneSentry, follow these steps:

1. Ensure that you have Node.js installed on your machine. OneSentry requires Node.js to function properly.
2. Open a terminal or command prompt.
3. Run the following command to install OneSentry globally:

```bash
npm install -g one-sentry
```

## Usage

Once OneSentry is installed, you can use it in your Node.js projects. Follow the steps below:

1. Open a terminal or command prompt.
2. Navigate to the root directory of your Node.js project.
3. Generate a Sentry.json file.
4. Add the following configuration:

```json
{
  "path": "Root path project",
  "command": "Command to start your project's server, for example: npx ts-node -r tsconfig-paths/register src/server.ts"
}
```

5. Run the following command to start OneSentry:

```bash
npx sentry
```

Now your system is being monitored by OneSentry.

## Contributing

If you encounter any issues, have suggestions, or would like to contribute to OneSentry, please check out the [GitHub repository](https://github.com/wicaromendes/one-sentry) for this project. We welcome contributions from the community and appreciate your feedback.

## License

OneSentry is open source software licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this software in accordance with the terms specified in the license.