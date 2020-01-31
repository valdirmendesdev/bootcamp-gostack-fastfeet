import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: "It's ok! Server is running!" })
);

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

export default routes;
