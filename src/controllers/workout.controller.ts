import { UserService } from "../services/user.service";
import { Response, Request, NextFunction } from 'express'

export class OfferController {
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            // pasar a entero
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await OfferService.getAll()
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const offerData = req.body
            const newOffer = await OfferService.create(offerData)
            res.status(200).json(newOffer)
        } catch (error) {
            next(error)
        }
    }
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const offerData = req.body
            const id = Number.parseInt(req.params.id)
            const updatedOffer = await OfferService.update(id, offerData)
            res.status(200).json(updatedOffer)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            const deletedOffer = await OfferService.delete(id)
            res.status(200).json(deletedOffer)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            const deletedOffer = await OfferService.delete(id)
            res.status(200).json(deletedOffer)
        } catch (error) {
            next(error)
        }
    }
    static async rate(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            const { value } = req.body
            const userId = req.body.user.id

            await OfferService.rate(userId, id, value)
            res.status(200).json({ message: 'Offer rate successfully' })
        } catch (error) {
            next(error)
        }
    }

    static async getRate(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)

            await OfferService.getRate(id)
            res.status(200).json({ message: 'Offer rate successfully' })
        } catch (error) {
            next(error)
        }
    }
}
