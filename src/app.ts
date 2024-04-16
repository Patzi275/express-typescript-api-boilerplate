import express, { Request, Response } from 'express';
import tasksRoutes from './api/routes/tasks.routes';
import authRoutes from './api/routes/auth.routes';

const app = express();

app.use(express.json());
app.use('/tasks', tasksRoutes);
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});


export default app;