import express from 'express';
import { getPlaces } from '../controllers/place.controller';
import { getPlaceById } from '../controllers/place.controller';
import { createPlace } from '../controllers/place.controller';
import { updatePlace } from '../controllers/place.controller';
import { deletePlace } from '../controllers/place.controller';

const router = express.Router();

router.get('/', getPlaces);
router.get('/:id', getPlaceById);
router.post('/', createPlace);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);