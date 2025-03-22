import usere from '../models/user.model.js';
import mongoose from 'mongoose';

//Get all users
export const getAllUsers = async (req, res) => {
    try {
        const allusers = await usere.find();
        res.status(200).json({success: true, data: allusers});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Get user by id
export const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ message: 'No user with that id' });
    }
    try {
        const user = await usere.findById(id);
        res.status(200).json({success: true, data: user});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Create a new user
export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new usere(user);
    try {
        await newUser.save();
        res.status(201).json({success: true, message: 'create success'});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ message: 'No user with that id' });
    }
    try{
        await usere.findByIdAndUpdate(id, user
        , { new: true });
        res.status(201).json({success: true, message: 'update success'});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ message: 'No user with that id' });
    }
    try{
        await usere.findByIdAndDelete(id);
        res.status(201).json({success: true, message: 'delete success'});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}