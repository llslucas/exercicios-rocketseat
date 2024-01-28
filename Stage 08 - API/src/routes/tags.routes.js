import Router from 'express';
import TagsController from '../controllers/TagsController.js';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.get("/:user_id", tagsController.index);

export default tagsRouter;
