import express from 'express';
import config from './config/config';
import expressConfig from './config/expressConfig';
import routes from './src/presentation/routes';
import serverConfig from './config/serverConfig';

// middlewares
import errorHandlingMiddleware from './src/presentation/middlewares/errorHandlingMiddleware';

const app = express();
const server = require('http').createServer(app);

// express.js configuration (middlewares etc.)
expressConfig(app);

// routes for each endpoint
routes(app, express);

// server configuration and start
serverConfig(app, server, config).startServer();

// error handling middleware
app.use(errorHandlingMiddleware);

// Expose app
export default app;
