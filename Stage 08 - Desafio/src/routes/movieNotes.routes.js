import Router from 'express';
import MovieNotesController from '../controllers/MovieNotesController.js';

const movieNotesRouter = Router();
const movieNotesController = new MovieNotesController();

movieNotesRouter.post("/:user_id", movieNotesController.create);
movieNotesRouter.get("/:id", movieNotesController.show);
movieNotesRouter.delete("/:id", movieNotesController.delete);
movieNotesRouter.get("/", movieNotesController.index);

export default movieNotesRouter;
