import { pool } from "../db.js"

export const searchBookingsById = async(req, res)=>{
    try {
        const {id} = req.params
        const [response]= await pool.query("SELECT * FROM bookings WHERE idbookings = ?", [id])
        if(response.length===0){
            return res.send({mesagge: "No se encontro reserva con el id suministrado"})
        }
        res.send(response)
    } catch (error) {
        console.log(error.mesagge)
        res.send(error.mesagge)
    }
}
export const createBooking = async(req,res)=>{
    try {
        const {idrooms, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida} = req.body
        const [response] = await pool.query('INSERT INTO bookings (idrooms, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida) VALUES (?,?,?,?,?,?)', [idrooms, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida])
        if(response.affectedRows === 0){
            return res.send({mesagge:"No se pudo hacer la reservacion revise todos los campos"})
        }
        res.send({mesagge:"Reservado Correctamente"})
    } catch (error) {
        console.log(error.code)
        res.send({mesagge: error.code})
    }
}
export const allBookings = async(req,res)=>{
    try {
        const [response] = await pool.query('SELECT * FROM bookings')
        if(response.length === 0 ){
            return res.send({mesagge: 'No se encontraron reservas'})
        }
        res.send(response)
    } catch (error) {
        console.log(error.mesagge)
        res.send({mesagge: error.mesagge})
    }
}
export const deleteBookingById = async(req,res)=>{
    try {
        const {id} = req.params
        const [response] = await pool.query('DELETE FROM bookings WHERE idbookings=? ', [id])
        if(response.affectedRows===0){
            return res.send({mesagge: 'No se ha podido eliminar la reservacion, confirma el id'})
        }
        res.send({mesagge: 'Reserva eliminada correctamente'})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
export const updateBookingById = async(req,res)=>{
    try {
        const {id} = req.params
        const {idrooms, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida} = req.body
        const [response] = await pool.query('UPDATE bookings SET idrooms=?, nombre_cliente=?, telefono_cliente=?, fecha_reservacion=?, fecha_entrada=?, fecha_salida=? WHERE idbookings=?', [idrooms, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida, id])
        if(response.affectedRows === 0){
            return res.send({mesagge: 'No se pudo actualizar la reserva compruebe que los datos esten bien'})
        }
        res.send({mesagge:'Actualizado correctamente'})
    } catch (error) {
        console.log(error.code)
        res.send({mesagge:error.code})
    }
}