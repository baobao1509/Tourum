import Like from "../models/likes.model.js";

const getAllLikes = async (req, res) => {
    try {
        const likes = await Like.find({});
        res.status(201).json({ message:"Success", data:likes });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getLikeByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const like = await Like.find({userId:id});
        res.status(201).json({ message:"Success", data:like });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getLikeByPostId = async (req, res) => {
    const { id } = req.params;
    try {
        const like = await Like.find({postId:id});
        res.status(201).json({ message:"Success", data:like });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getLikeByUserIdAndPostId = async (req, res) => {
    const { userId, postId } = req.params;
    try {
        const like = await Like.find({userId:userId, postId:postId});
        res.status(201).json({ message:"Success", data:like });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createLike = async (req, res) => {
    const like = req.body;

    const newLike = Like(like);

    try {
        await newLike.save();
        return res.status(201).send({success:true ,message: 'Insert success'});
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateLike = async (req, res) => {
    const { id } = req.params;
    const like = req.body;
    try{
        await Like.findByIdAndUpdate(id, like, {new:true});
        return res.status(201).send({success:true ,message: 'Update success'})
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const deleteLike = async (req, res) => {
    const { id } = req.params;
    try{
        await Like.findByIdAndDelete(id);
        return res.status(201).send({success:true ,message: 'Delete success'});
    }catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {
    getAllLikes,
    getLikeById,
    createLike,
    updateLike,
    deleteLike
}