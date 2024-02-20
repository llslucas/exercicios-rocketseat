import Router from 'express';
import { SessionsController } from '../../../Stage 10 - Integração/src/controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
