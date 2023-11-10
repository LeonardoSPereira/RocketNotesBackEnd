const Router = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersController = require("../controller/UsersController");
const UserAvatarController = require("../controller/UserAvatarController");
const UsersValidatedController = require("../controller/UsersValidatedController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const usersValidatedController = new UsersValidatedController();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);
userRoutes.get("/validated", ensureAuthenticated, usersValidatedController.index);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)


module.exports = userRoutes;