import prisma from "../db"

import { comparePasswords, createJwt, hashPassword } from "../modules/auth"

export const createNewUser = async (req, res) => {
    const hash = await hashPassword(req.body.password)
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash,
        }
    })
    const token = createJwt({ id: user.id, username: user.username })
    res.send({ token })
}

export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        }
    })
    const isValid = await comparePasswords(req.body.password, user.password)
    if (!isValid) {
        res.status(401)
        res.send({ message: 'nope' })
        return;
    }
    const token = createJwt({ id: user.id, username: user.username })
    res.send({ token })
}