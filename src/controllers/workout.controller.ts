import { WorkoutService } from "../services/workout.service";
import { Response, Request, NextFunction } from 'express'

export class WorkoutController {
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id

            const workout = await WorkoutService.getById(id)
            res.status(200).json(workout)
        } catch (error) {
            next(error)
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const workout = await WorkoutService.getAll()
            res.status(200).json(workout)
        } catch (error) {
            next(error)
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const workoutData = req.body.workout
            const newWorkout = await WorkoutService.create(workoutData)
            res.status(200).json(newWorkout)
        } catch (error) {
            next(error)
        }
    }
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const workoutData = req.body
            const id = req.params.id
            const updatedOffer = await WorkoutService.update(id, workoutData)
            res.status(200).json(updatedOffer)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const deletedWorkout = await WorkoutService.delete(id)
            res.status(200).json(deletedWorkout)
        } catch (error) {
            next(error)
        }
    }

    // static async rate(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const id = Number.parseInt(req.params.id)
    //         const { value } = req.body
    //         const userId = req.body.user.id

    //         await WorkoutService.rate(userId, id, value)
    //         res.status(200).json({ message: 'Offer rate successfully' })
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    // static async getRate(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const id = Number.parseInt(req.params.id)

    //         await WorkoutService.getRate(id)
    //         res.status(200).json({ message: 'Offer rate successfully' })
    //     } catch (error) {
    //         next(error)
    //     }
    // }
}
