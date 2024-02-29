import Router from 'express';
import multer from 'multer';
import { MULTER } from '../configs/upload.js';
const upload = multer(MULTER);

import UsersController from '../controllers/UsersController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js'

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);
usersRouter.put("/", ensureAuthenticated, usersController.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) =>{
    console.log(request.file.filename);
    response.json();
});

export default usersRouter;
