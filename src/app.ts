import express, { Request, Response } from 'express';
import router from './api/routes';

const app = express();

app.use(express.json());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});


export default app;