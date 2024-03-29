import express from 'express';
import routes from '../src/routes/router'
import { errorMiddleware } from '../src/middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use(routes);
// app.use(errorMiddleware);

app.listen(3333, () => {
  console.log(`Server is running on http://localhost:3333`);
});

export default app;
