import Router from 'express';
import NotesController from '../controllers/NotesController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js';

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.use(ensureAuthenticated);

notesRouter.post("/", notesController.create);
notesRouter.get("/", notesController.index);
notesRouter.get("/:id", notesController.show);
notesRouter.delete("/:id", notesController.delete);

export default notesRouter;
