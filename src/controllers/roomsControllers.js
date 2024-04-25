import { pool } from "../db.js"

export const createRoom = async(req,res)=>{
    try {
        const {numero, tipo, valor} = req.body
        const [response] = await pool.query("INSERT INTO rooms (numero, tipo, valor) VALUES (?, ?, ?)",[numero,tipo,valor])
        if(response.affectedRows === 0){
            return res.send({message: 'Error al registrar'})
        }
        res.send({message:'Creado correctamente', data: {numero: numero, tipo:tipo, valor:valor}})
    } catch (error) {
        console.log(error.message)
        res.send({message: error.message})
    }
}
export const searchRoombyId = async(req,res)=>{
    try {
        const {id} = req.params
        const [response] = await pool.query("SELECT * FROM rooms WHERE idrooms = ?",[id])
        if(response.length===0){
            return res.send({message:'room no encontrada, compruebe el id'})
        }
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
export const deleteRoomById = async(req,res)=>{
    try {
        const {id} = req.params
        await pool.query('DELETE FROM bookings WHERE idrooms = ? ', [id])
        const [response] = await pool.query('DELETE FROM rooms WHERE idrooms = ? ', [id])
        if(response.affectedRows ===0){
            return res.send({message: 'No se pudo eliminar la habitacion. Verificar el id'})
        }
        res.send({message: 'Eliminado correctamente!!'})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
export const allRooms = async(req, res)=>{
    try {
        const [response] = await pool.query('SELECT * FROM rooms')
        if(response.length === 0){
            return res.status(500).send({message: 'No se encontraron habitaciones'})
         }
         res.status(200).send(response)
    } catch (error) {
        console.log(error.message)
        res.send({message: error.message})
    }
}
export const updateRoomById = async(req,res)=>{
    try {
        const {id} = req.params
        const {numero, tipo, valor} = req.body
        const [response]= await pool.query("UPDATE rooms SET numero=?, tipo=?, valor=? WHERE idrooms=?",[numero, tipo, valor, id])
        if(response.affectedRows === 0){
            return res.send({message:'No se actualizo la informacion de la habitacion, verificar el id'})
        }
        res.send({message:"Actualizad correctamente", data:{id: id, numero:numero, tipo: tipo, valor:valor}})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}