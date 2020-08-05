const unleash = require('unleash-server');
const cors = require('cors');
const crossOriginMiddleware = (app) => app.use(cors())
unleash
  .start({
    databaseUrl: 'postgres://dummyuser:dummypassword@toggledb:5432/unleash',
    port: 4242,
    preHook: crossOriginMiddleware
  })
  .then(unleash => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });