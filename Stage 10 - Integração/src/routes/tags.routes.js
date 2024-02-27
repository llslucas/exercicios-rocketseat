import Router from 'express';
import TagsController from '../controllers/TagsController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.use(ensureAuthenticated);

tagsRouter.get("/", tagsController.index);

export default tagsRouter;
