const { createTerminus } = require('@godaddy/terminus');

export default function serverConfig(app, serverInit, config) {
  function beforeShutdown() {
    return new Promise((resolve) => {
      setTimeout(resolve, 15000);
    });
  }

  function onShutdown() {
    console.log('cleanup finished, server is shutting down');
  }

  function startServer() {
    createTerminus(serverInit, {
      logger: console.log,
      onShutdown,
      beforeShutdown
    }).listen(config.port, config.ip, () => {
      console.log(
        'Express server listening on %d, in %s mode',
        config.port,
        app.get('env')
      );
    });
  }

  return {
    startServer
  };
}
