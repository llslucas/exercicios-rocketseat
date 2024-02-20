import Router from 'express'

import usersRouter from './users.routes.js';
import notesRouter from './notes.routes.js';
import tagsRouter from './tags.routes.js';
import sessionsRouter from './sessions.routes.js';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/notes', notesRouter);
routes.use('/tags', tagsRouter);

export default routes;