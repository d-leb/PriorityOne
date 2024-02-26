# PriorityOne

PriorityOne is an opensource, serverless personal task management tool which can store task data in local storage.

If you have suggestions or have any problems, please open an issue on the [d-leb/PriorityOne issues board](https://github.com/d-leb/PriorityOne/issues).

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS is required to run commands and scripts. Both software and installation instructions can be found at [NodeJS.org](https://nodejs.org/). Using the LTS version is recommended.

Nvm is used as the node version manager to ensure the correct version of NodeJS is used with this project. For specific installation instructions, visit the
[nvm-sh/nvm repo](https://github.com/nvm-sh/nvm) and follow the instructions for installation. For Windows, you will need to install Windows WSL or use the bash system installed with git and manually
add the ~/.nvm folder to your user PATH and .bash_profile file. If you choose to not use nvm, you will need to manually install the correct version of NodeJS.

Yarn is used as the package manager and to initiate scripts. You can install Yarn globably by running the command below after you have NodeJS installed.

```
npm install -g yarn
```

### Installing

Install the specific NodeJS version dependencies.

```
nvm install
nvm use
npm install -g npm
```

Setup package dependencies. This will install package dependencies using node modules resolution from the pnp cache stored in this repository. In the future, it may be possible to directly use pnp resolution.

```
yarn install
```

Be sure to install recommended extensions for VSCode. The project workspace settings are already pre-configured. This will allow VCode to automatically format your code.

The Development environment can now be started.

```
yarn start
```

Your default web browser should open or you can open any web browser on your development machine and visit [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the tests

Github will automatically run each of the following tests before allowing a PR to be merged. You can manually run all tests by running the review script.

```
yarn review
```

### Code quality tests

All code quality tests can be run using the lint script.

```
yarn lint
```

Code formatting can be manually verified using prettier.

```
yarn prettier
```

If issues are found, you may try to automatically correct the issues.

```
yarn prettier:fix
```

### Test coverage (Integration and Unit)

All tests can be run using the test script.

```
yarn test
```

You can manually check TypeScript types and syntax.

```
yarn tsc
```

### Bundle and Chunk management

Chunk and module sizes and entry points can be examined.

```
yarn analyze
```

## Deployment

A complete build will be generated and placed in the ***build*** folder.

```
yarn build
```

## Environment Variables

Create an .env file to store your environment variables.

## Built With

- [Browserslist](https://github.com/browserslist/browserslist) - Used to determine the browser support for a project
- [DotEnv Webpack](https://github.com/mrsteele/dotenv-webpack/) - Environment variables webpack plugin
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [SWC](https://swc.rs/) - SWC is an extensible Rust-based platform used for both compilation and bundling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language
- [Webpack](https://webpack.js.org/) - Static module bundler
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer/) - Visualize size of webpack output files with an interactive zoomable treemap
- [Yarn](https://yarnpkg.com/) - Package management

## Versioning

[SemVer](http://semver.org/) is used for versioning. For the versions available, see the [releases on this repository](https://github.com/d-leb/PriorityOne/releases).

Patch level is automatically updated on every merge into the develop branch.

## Authors

- **David LeBlanc** - _Initial work_ - [d-leb](https://github.com/d-leb)

See also the list of [contributors](https://github.com/d-leb/PriorityOne/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
