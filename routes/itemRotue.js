const itemController = require('../controllers/itemController')
const { verifyAll, verifyVendor, verifyAdmin } = require('../middleware/authMiddleware')

const router = require('express').Router()


router.get("/:itemId",verifyAll, itemController.getItemById)
router.get("/shop/:shopId",verifyAll, itemController.getItemByShop)
router.post("/addItem",verifyVendor, itemController.addItem)
router.delete("/:itemId",verifyVendor, itemController.deleteItemById)
router.put("/:itemId",verifyVendor, itemController.updateItemById)
router.patch("/:itemId",verifyVendor, itemController.updateItemById)

module.exports = router

