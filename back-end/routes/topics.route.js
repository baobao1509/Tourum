import express from 'express';
import topicRoutes from './topics.route.js';

const router = express.Router();

const topicRoutes = (app) => {
    router.get("/",topicRoutes.getAllTopics);
    router.get("/:id",topicRoutes.getTopicById);
    router.post("/",topicRoutes.createTopic);
    router.put("/:id",topicRoutes.updateTopic);
    router.delete("/:id",topicRoutes.deleteTopic);
    app.use('/', router);
}