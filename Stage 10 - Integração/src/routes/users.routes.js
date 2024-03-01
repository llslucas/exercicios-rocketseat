import Router from 'express';
import multer from 'multer';
import { MULTER } from '../configs/upload.js';
const upload = multer(MULTER);

import UsersController from '../controllers/UsersController.js';
import UserAvatarController from '../controllers/UserAvatarController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js'

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post("/", usersController.create);
usersRouter.put("/", ensureAuthenticated, usersController.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

export default usersRouter;
