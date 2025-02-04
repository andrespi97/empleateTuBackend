import { Response, Request, NextFunction } from 'express'

export const isCoach = (req: Request, res: Response, next: NextFunction): any => {
    const { role } = req.body.user
    try {
        if (role === 'COACH') {
            next()
        } else {
            res.status(401).json({ error: 'Access denied, no COACH' })
        }
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })
    }
}