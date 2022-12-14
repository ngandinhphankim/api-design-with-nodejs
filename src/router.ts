import { Router } from "express"
import { body } from "express-validator"
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product"
import { handlerInputErrors } from "./modules/middleware"

const router = Router()

/**
 * Product
 */
router.get("/product", getProducts)

router.get("/product/:id", getOneProduct)

router.post("/product", body('name').exists().isString(), handlerInputErrors, createProduct)

router.put("/product/:id", body('name').isString(), handlerInputErrors, updateProduct)

router.delete("/product/:id", deleteProduct)

/**
 * Update
 */

router.get("/update", (req, res) => { });

router.get("/update/:id", (req, res) => { });

router.post("/update", (req, res) => { });

router.put("/update/:id",
    body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']),
    handlerInputErrors,
    (req, res) => { });

router.delete("/update/:id", (req, res) => { });

/**
* UpdatePoint
*/

router.get("/updatepoint", (req, res) => { });

router.get("/updatepoint/:id", (req, res) => { });

router.post("/updatepoint", (req, res) => { });

router.put("/updatepoint/:id", (req, res) => { });

router.delete("/updatepoint/:id", (req, res) => { });

export default router