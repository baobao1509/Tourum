import Post from '../models/post.model';
import mongoose from 'mongoose';

//get all posts
export const getAllPosts = async (req, res) => {
  try {
    const allposts = await Post.find();
    res.status(200).json({success : true, data : allposts});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//get post by id
export const getPostById = async (req, res) => {
  const {id} = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json({success : true, data : post});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//Create a post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json({success : true, data : newPost});
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}


//update a post
export const updatePost = async (req, res) => {
  const {id} = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).status({success : false, message : 'No post with that id'});
    }
    try{
        await Post.findByIdAndUpdate
(id, post, {new : true});
        res.status(200).json({success : true, message : 'Post updated successfully'});
    } catch (error) {
        res.status(409).json({success:true, message: error.message });
    }
}

//delete a post
export const deletePost = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).status({success : false, message : 'No post with that id'});
    }
    try{
        await Post.findByIdAndRemove(id);
        res.status(200).json({success : true, message : 'Post deleted successfully'});
    } catch (error) {
        res.status(409).json({success:true, message: error.message });
    }
}