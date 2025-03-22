import express from 'express';
import commentRoutes from './comments.route.js';

const router = express.Router();

const commentRoutes = (app) => {
    router.get("/",commentRoutes.getAllComments);
    router.get("/:id",commentRoutes.getCommentById);
    router.post("/",commentRoutes.createComment);
    router.put("/:id",commentRoutes.updateComment);
    router.delete("/:id",commentRoutes.deleteComment);
    app.use('/', router);
}