import { Router } from "express"
import { allRooms, createRoom, deleteRoomById, searchRoombyId, updateRoomById } from "../controllers/roomsControllers.js";

const roomsRoutes = Router();

roomsRoutes.get('/rooms', allRooms);
roomsRoutes.get('/rooms/:id', searchRoombyId);
roomsRoutes.post('/rooms', createRoom); 
roomsRoutes.delete('/rooms/:id', deleteRoomById);
roomsRoutes.put('/rooms/:id', updateRoomById)
export default roomsRoutes; 