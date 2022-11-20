import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

export const createJwt = ({ id, username }) => {
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET)
    return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401)
        res.send("unauthorized")
        return;
    }
    const [, token] = bearer.split(" ");
    if (!token) {
        console.log('here');
        res.status(401)
        res.send("not valid token")
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next()
        return;
    } catch (e) {
        console.log(e);
        res.status(401)
        res.send("error verify token")
        return;
    }
}

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

