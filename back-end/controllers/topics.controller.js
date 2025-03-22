import Topic from "../models/topics.model.js";

const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find({});
        res.status(201).json({ message:"Success", data:topics });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getTopicById = async (req, res) => {
    const { id } = req.params;
    try {
        const topic = await Topic.findById(id);
        res.status(201).json({ message:"Success", data:topic });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createTopic = async (req, res) => {
    const topic = req.body;

    const newTopic = Topic(topic);

    try {
        await newTopic.save();
        return res.status(201).send({success:true ,message: 'Insert success'});
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateTopic = async (req, res) => {
    const { id } = req.params;
    const topic = req.body;
    try{
        await Topic.findByIdAndUpdate(id, topic, {new:true});
        return res.status(201).send({success:true ,message: 'Update success'})
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}

const deleteTopic = async (req, res) => {
    const { id } = req.params;
    try{
        await Topic.findByIdAndDelete(id);
        return res.status(201).send({success:true ,message: 'Delete success'});
    }catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {
    getAllTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic
}