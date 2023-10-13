const Router = require("express");

const NotesController = require("../controller/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesController = new NotesController;

const notesRoutes = Router();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.post("/", notesController.create);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes;