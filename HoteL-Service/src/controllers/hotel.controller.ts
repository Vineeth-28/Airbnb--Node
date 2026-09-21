import { Response, Request, NextFunction } from 'express';
import { createHotelService } from '../services/hotel.service';
import { getHotelByIdService } from '../services/hotel.service';
import { updateHotelService } from '../services/hotel.service';
import { getAllHotelsService } from '../services/hotel.service';
import { deleteHotelService } from '../services/hotel.service';
import {StatusCodes} from 'http-status-codes';
export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    //call the service layer
    const hotelResponse = await createHotelService(req.body);
    //send the response
    res.status(StatusCodes.CREATED).json({
      message: 'Hotel Created successfully',
      success: true,
      data: hotelResponse,
    });
  } catch (error) {
    next(error);
  }
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
  try {
    //call the service layer
    const hotelResponse = await getHotelByIdService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
      message: 'Hotel fetched successfully',
      success: true,
      data: hotelResponse,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    //call the service layer
    const hotelResponse = await updateHotelService(Number(req.params.id), req.body);
    res.status(StatusCodes.OK).json({
      message: 'Hotel updated successfully',
      success: true,
      data: hotelResponse,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    //call the service layer
    const hotelsResponse = await getAllHotelsService();
    res.status(StatusCodes.OK).json({
      message: 'All hotels fetched successfully',
      success: true,
      data: hotelsResponse,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
  try {
    //call the service layer
    const hotelResponse = await deleteHotelService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
      message: 'Hotel deleted successfully',
      success: true,
      data: hotelResponse,
    });
  } catch (error) {
    next(error);
  }
}
