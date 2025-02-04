import { HttpException } from "../exceptions/httpException";
import { PrismaClient, Workout } from "@prisma/client";
const prisma = new PrismaClient()

export class WorkoutService {

    static async getById(id: string) {
        const findWorkout = await prisma.workout.findUnique({ where: { id } })
        if (!findWorkout) throw new HttpException(404, 'Workout not found')
        return findWorkout
    }

    // localhost:3000/api/offer/?title=dam
    static async getAll(title: string = '') {
        return await prisma.workout.findMany({
            where: title ? {
                title: {
                    contains: title
                }
            } : {},
            orderBy: {
                createdAt: 'desc'
            },
            take: 100
        })
    }

    static async create(workout: Workout) {
        return await prisma.workout.create({
            data: {
                ...workout
            }
        })
    }

    static async update(id: string, workout: Workout) {
        const findWorkout = prisma.workout.findUnique({ where: { id } })
        if (!findWorkout) throw new HttpException(404, 'Workout doesnt exists')
        return await prisma.workout.update({
            where: { id },
            data: {
                ...workout,
            }
        })
    }

    static async delete(id: string) {
        return prisma.workout.delete({ where: { id } })
    }


    static async rate(id: number) {
        // si existe lo actualizo
        // si no existe lo creo
    }






    static async getByEmail(email: string) {
        const findUser = await prisma.user.findUnique(
            { where: { email }, omit: { password: true } }
        )
        if (!findUser) throw new HttpException(404, 'User not found')
        return findUser
    }



}