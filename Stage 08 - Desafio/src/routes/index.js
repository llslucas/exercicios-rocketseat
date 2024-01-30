import Router from 'express'

import usersRouter from './users.routes.js';
import movieNotesRouter from './movieNotes.routes.js';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/movieNotes', movieNotesRouter);

export default routes;