import Router from 'express';
import MovieNotesController from '../controllers/MovieNotesController.js';

const movieNotesRouter = Router();
const movieNotesController = new MovieNotesController();

movieNotesRouter.post("/:user_id", movieNotesController.create);

export default movieNotesRouter;
