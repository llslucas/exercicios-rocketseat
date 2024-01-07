import Router from 'express';
import UsersController from '../controllers/UsersController.js';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);
usersRouter.put("/:id", usersController.update);

export default usersRouter;
