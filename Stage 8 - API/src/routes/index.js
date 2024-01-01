import Router from 'express'

import usersRouter from './users.routes.js';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;

