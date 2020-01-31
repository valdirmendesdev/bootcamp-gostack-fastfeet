import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: "It's ok! Server is running!" })
);

routes.post('/sessions', SessionController.store);

export default routes;
