import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  poastAddComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.regiserView, postRegisterView);
apiRouter.post(routes.addComment, poastAddComment);
export default apiRouter;
