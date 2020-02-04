import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: "It's ok! Server is running!" })
);

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

/**
 * Recipient routes
 */
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.get('/recipients/:id', RecipientController.show);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

/**
 * Deliveryman routes
 */
routes.get('/deliverymen', DeliverymanController.index);
routes.post('/deliverymen', DeliverymanController.store);
routes.get('/deliverymen/:id', DeliverymanController.show);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

export default routes;
