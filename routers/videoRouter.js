import express from "express";
import routes from "../routes";
import { vidoes, upload, vidoeDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.vidoes, vidoes)
videoRouter.get(routes.upload, upload)
videoRouter.get(routes.vidoeDetail, vidoeDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo,deleteVideo)

export default videoRouter;