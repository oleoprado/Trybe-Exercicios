import express, { NextFunction, Request, Response } from 'express'; // desestruturar tipagem req e res
import statusCodes from './src/utils/statusCode';
import 'express-async-errors';
import BooksRoutes from './src/routes/bookRoutes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes)

// middleware de erro (qualquer tipo de erro que acontencer em tempo de execucao cairá aqui)
// Sempre coloque ele após a declaração de outros middlewares, caso contrário esse middleware não irá capturar os erros dos demais.
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});