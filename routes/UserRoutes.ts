import express from "express";
import {
  getThumbnailbyId,
  getUsersThumbnails,
} from "../controllers/UserController";

const UserRouter = express.Router();

UserRouter.get("/thumbnails", getUsersThumbnails);
UserRouter.get("/thumbnails/:id", getThumbnailbyId);

export default UserRouter;
