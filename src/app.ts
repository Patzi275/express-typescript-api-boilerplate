import express, { Request, Response } from 'express';
import tasksRoutes from './api/routes/tasks';

const app = express();

app.use(express.json());
app.use('/tasks', tasksRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});


export default app;