import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({message: 'It\'s ok! Server is running!'}));

export default routes;
