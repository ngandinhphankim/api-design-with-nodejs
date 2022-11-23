import prisma from "../db"

export const getProducts = (req, res) => {
    const user = prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })

    return res.json({ data: user.products })
}

// Get One
export const getOneProduct = (req, res) => {
    const id = req.params.id;
    const product = prisma.product.findFirst({
        where: {
            id: req.body.id,
            belongsToId: req.user.id,
        }
    })
    return res.json({ data: product })
}