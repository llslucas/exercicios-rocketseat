import Router from 'express';
import MovieNotesController from '../controllers/MovieNotesController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js';

const movieNotesRouter = Router();
const movieNotesController = new MovieNotesController();

movieNotesRouter.use(ensureAuthenticated);

movieNotesRouter.post("/", movieNotesController.create);
movieNotesRouter.get("/:id", movieNotesController.show);
movieNotesRouter.delete("/:id", movieNotesController.delete);
movieNotesRouter.get("/", movieNotesController.index);

export default movieNotesRouter;
