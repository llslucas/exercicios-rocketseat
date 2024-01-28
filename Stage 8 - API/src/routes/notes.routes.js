import Router from 'express';
import NotesController from '../controllers/NotesController.js';

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.post("/:user_id", notesController.create);
notesRouter.get("/", notesController.index);
notesRouter.get("/:id", notesController.show);
notesRouter.delete("/:id", notesController.delete);

export default notesRouter;
