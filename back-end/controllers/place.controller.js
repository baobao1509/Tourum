import place from '../models/place.model';
import mongoose from 'mongoose';

// Get all places
export const getPlaces = async (req, res) => {
  try {
    const allplaces = await place.find();
    res.status(200).json({success: true, data: allplaces});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//get place by id
export const getPlaceById = async (req, res) => {
  try {
    const placeId = req.params.id;
    const placeById = await place.findById(placeId);
    res.status(200).json({success: true, data: placeById});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//create place
export const createPlace = async (req, res) => {
  try {
    const newPlace = new place(req.body);
    await newPlace.save();
    res.status(201).json({success: true, message: "Place created successfully"});
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

//update place
export const updatePlace = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        {
        return res.status(404).send(`No place with id: ${req.params.id}`);
        }
  try {
    const placeId = req.params.id;
    const updatedPlace = await place.findByIdAndUpdate  (placeId, req.body, {new: true});
    res.status(200).json({success: true, message: "Place updated successfully"});
}
    catch (error) {
    res.status(409).json({ message: error.message });
}
}

//delete place
export const deletePlace = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        {
        return res.status(404).send(`No place with id: ${req.params.id}`);
        }
  try {
    const placeId = req.params.id;
    await place.findByIdAndDelete(placeId);
    res.status(200).json({success: true, message: "Place deleted successfully"});
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}