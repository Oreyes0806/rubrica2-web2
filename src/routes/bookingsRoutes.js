import { Router } from "express";
import { createBooking, searchBookingsById, allBookings, updateBookingById, deleteBookingById } from "../controllers/bookingsControllers.js";

const bookingsRoutes = Router()

bookingsRoutes.get('/bookings',allBookings)
bookingsRoutes.post('/bookings', createBooking)
bookingsRoutes.get('/bookings/:id', searchBookingsById)
bookingsRoutes.put('/bookings/:id', updateBookingById)
bookingsRoutes.delete('/bookings/:id', deleteBookingById)
export default bookingsRoutes;