import Comment from "../models/comments.model.js";

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.status(201).json({ message:"Success", data:comments });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        res.status(201).json({ message:"Success", data:comment });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createComment = async (req, res) => {
    const comment = req.body;

    const newComment = Comment(comment);

    try {
        await newComment.save();
        return res.status(201).send({success:true ,message: 'Insert success'});
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateComment = async (req, res) => {
    const { id } = req.params;
    const comment = req.body;
    try{
        await Comment.findByIdAndUpdate(id, comment, {new:true});
        return res.status(201).send({success:true ,message: 'Update success'})
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const deleteComment = async (req, res) => {
    const { id } = req.params;
    try{
        await Comment.findByIdAndDelete(id);
        return res.status(201).send({success:true ,message: 'Delete success'});
    }catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
};