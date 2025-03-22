import express from 'express';
import { getAllPosts } from '../controllers/posts.controller';
import { createPost } from '../controllers/posts.controller';
import { getPostById } from '../controllers/posts.controller';
import { updatePost } from '../controllers/posts.controller';
import { deletePost } from '../controllers/posts.controller';
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
