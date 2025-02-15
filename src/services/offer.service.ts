import { HttpException } from "../exceptions/httpException";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient()

export class OfferService {

    static async getById(id: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id } })
        if (!findOffer) throw new HttpException(404, 'Offer not found')
        return findOffer
    }
    // localhost:3000/api/offer/?title=dam
    static async getAll(title: string = '') {
        return await prisma.offer.findMany({
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
    static async create(idUser: number, offer: Offer) {
        return await prisma.offer.create({
            data: {
                ...offer,
                idUserCreator: idUser
            }
        })
    }
    static async update(id: number, offer: Offer) {
        const findOffer = prisma.offer.findUnique({ where: { id } })
        if (!findOffer) throw new HttpException(404, 'Offer doesnt exists')
        return await prisma.offer.update({
            where: { id },
            data: {
                ...offer,
            }
        })
    }
    static async delete(id: number) {
        return prisma.offer.delete({ where: { id } })
    }
    static async getByEmail(email: string) {
        const findUser = await prisma.user.findUnique(
            { where: { email }, omit: { password: true } }
        )
        if (!findUser) throw new HttpException(404, 'User not found')
        return findUser
    }
    static async getAll() {
        const users = await prisma.user.findMany({
            omit: { password: true }
        })
        return users
    }
}