const { readFile } = require('fs').promises;
const { join } = require('path');

async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');

  const authdata = await readFile(join(__dirname, '../../authdata.json'), 'utf-8');

  const authorized = JSON.parse(authdata);

  if( token in authorized) {
    req.teams = authorized[token];
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = apiCredentials;