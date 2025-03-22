import express from 'express';
import likesRoutes from './likes.route.js';

const router = express.Router();

const likesRoutes = (app) => {
    router.get("/",likesRoutes.getAllLikes);
    router.get("/:id",likesRoutes.getLikeById);
    router.post("/",likesRoutes.createLike);
    router.put("/:id",likesRoutes.updateLike);
    router.delete("/:id",likesRoutes.deleteLike);
    app.use('/', router);
}