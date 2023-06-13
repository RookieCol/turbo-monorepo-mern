# Turbo Monorepo MERN

This is a monorepo project using Turbo and NestJS for building a MongoDB-powered API and a frontend web client.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/RookieCol/turbo-monorepo-mern.git`
```
2. Install dependencies:
```
cd turbo-monorepo-mern
npm install
```
## Environment Configuration

Rename the .env.develop file in the root directory to .env. Open the .env file and provide the MONGO_URI value with your MongoDB connection URI.
## Development

To start the development environment, run the following command:
```bash
npm run dev
```
This will launch Turbo in development mode and start the API server.

## Building

To build the project for production, run the following command:
```bash
npm run build
```
This will compile the TypeScript code and generate the necessary build artifacts.

## Project Structure

- The `apps` folder contains two sub-folders: `api` and `webclient`.
- The `api` folder contains the backend API code built with NestJS. It has its own package.json, source code in the `src` folder, and TypeScript configuration in the `tsconfig.json` file.
- The `webclient` folder contains the frontend web client code built with React. It also has its own package.json, source code in the `src` folder, and TypeScript configuration in the `tsconfig.json` file.
- The root folder contains the main package.json, package lock file, and Turbo configuration file.

Please refer to the respective README files inside the `api` and `webclient` folders for more information on setting up and running each component.


