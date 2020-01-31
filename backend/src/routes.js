import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: "It's ok! Server is running!" })
);

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.get('/recipients/:id', RecipientController.show);
routes.put('/recipients', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
