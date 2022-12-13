require('dotenv').config();
const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executado na porta ${PORT}`);
  // console.log(`Valor da variavel de ambiente $USER: ${process.env.USER}`);
});