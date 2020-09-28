/* eslint-disable prefer-arrow-callback, func-names */
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const shrinkRay = require('shrink-ray-current');


const app = express();
app.use(shrinkRay());
app.use(helmet.hidePoweredBy());
app.use(cors());

const PORT = process.env.PORT || 2005;

const { log } = console;

if (process.env.NODE_ENV !== 'development') {
  // Set a static folder
  app.use(express.static(`${__dirname}/build`));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/build`, 'index.html'));
  });
}
app.listen(PORT, function () {
  log(`Node Server Running on port:${PORT}`);
});

const safeServerShutDown = () => {
  log('Stopping server due to an interruption');
  log('Now closing server...');
  process.exit(0);
};

process.on('SIGINT', safeServerShutDown);

if (process.platform === 'win32') {
  // SIGINT doesn't work on windows
  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  }).on('SIGINT', () => {
    process.emit('SIGINT');
  });
}
