import { createHotelDto, updateHotelDto } from '../dto/hotel.dto';
import {
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel,
  getAllHotels,
  softdelete
} from '../repository/hotel.repository';

export async function createHotelService(hotelData: createHotelDto) {
  const hotel = await createHotel(hotelData);
  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}

export async function getAllHotelsService() {
  const hotels = await getAllHotels();
  return hotels;
}

export async function deleteHotelService(id: number) {
  const hotel = await deleteHotel(id);
  return hotel;
}

export async function updateHotelService(id: number, updateData: updateHotelDto) {
  const hotel = await updateHotel(id, updateData);
  return hotel;
}

export async function softDeleteHotelService(id: number) {
  const hotel = await softdelete(id);
  return hotel;
}