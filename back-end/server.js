import express from 'express';  // ES6 syntax
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Posts from './models/posts.model.js';
const app = express();

dotenv.config();
// Middleware để parse JSON
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(201).json({ message:"Succes", data:posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.put('/:id', async(req, res) => { 
  const { id } = req.params;
  const post = req.body;
  if(!id){
    return res.status(400).send({message: 'Id is required'});
  }

  try{
    await Posts.findByIdAndUpdate
    (id, post, {new:true});
    return res.status(201).send({success:true ,message: 'Update succes'})}
    catch (error) {
      res.status(409).json({message: error.message});
    }
 });

app.delete('/:id',async(req, res) => {
  const { id } = req.params;
  if(!id){
    return res.status(400).send({message: 'Id is required'});
  }

  try{
    await Posts.findByIdAndDelete(id);
    return res.status(201).send({success:true ,message: 'Delete succes'});
  }catch (error) {
    res.status(409).json({message: error.message});
  }
});  

app.post('/', async(req, res) => {
  const post = req.body;
  if(!post.title){
    return res.status(400).send({message: 'Title is required'});
  }

  const newPost = Posts(post);

  try {
    await newPost.save();
    return res.status(201).send({success:true ,message: 'Insert succes'});
  }
  catch (error) {
    res.status(409).json({message: error.message});
  }

});


console.log(process.env.MONGO_URI);

app.listen(2222, () => {
  connectDB();
  console.log('Server is running on http://localhost:2222 hello');
});

