import { Router } from "express";
import { WorkoutController } from '../controllers/workout.controller'
import { loginValidation, registerValidation } from "../middlewares/validators.middleware";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { isCoach } from "@/middlewares/isCoach.middleware";
const router = Router()

//API REST FULL


//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/', WorkoutController.getAll)
//localhost:3000/api/offerts/xxxx
router.get('/:id', WorkoutController.getById)
//POST añadir una oferta nueva localhost:3000/api/offerts/  {body}
router.post('/', isCoach, WorkoutController.create)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX  
router.delete('/:id', WorkoutController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX  {body}
router.put('/:id', WorkoutController.update)

// Calificamos una oferta x   {body}
// router.post('/:id/rate/', WorkoutController.rate)
// Vemos que calificación (total) se le ha data a una oferta X
// router.get('/:id/rate/', WorkoutController.getRate)



export default router