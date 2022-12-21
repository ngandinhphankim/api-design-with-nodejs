import prisma from "../db"

// Get All
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
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
export const getOneProduct = async (req, res) => {
    const product = await prisma.product.findFirst({
        where: {
            id: req.body.id,
            belongsToId: req.user.id,
        }
    })
    return res.json({ data: product })
}

// Create 
export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        },
    })
    return res.json({ data: product })
}

// Update 
export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    })
    return res.json({ data: updated })
}

// Delete 
export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    })
    return res.json({ data: deleted })
}