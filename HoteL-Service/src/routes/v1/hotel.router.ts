import { validateRequestBody } from './../../validators/index';
import { hotelSchema } from './../../validators/hotel.validator';

import express from 'express';
import {
  createHotelHandler,
  deleteHotelHandler,
  updateHotelHandler,
  softDeleteHotelHandler
} from '../../controllers/hotel.controller';
import { getHotelByIdHandler } from '../../controllers/hotel.controller';
import { getAllHotelsHandler } from '../../controllers/hotel.controller';

const HotelRouter = express.Router();
HotelRouter.post('/', validateRequestBody(hotelSchema), createHotelHandler);
HotelRouter.get('/:id', getHotelByIdHandler);
HotelRouter.delete('/:id', deleteHotelHandler);
HotelRouter.put('/:id', validateRequestBody(hotelSchema), updateHotelHandler);
HotelRouter.get('/', getAllHotelsHandler);
HotelRouter.delete('/soft/:id', softDeleteHotelHandler);

export default HotelRouter;
