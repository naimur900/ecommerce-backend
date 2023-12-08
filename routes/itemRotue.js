const itemController = require("../controllers/itemController");
const {
  verifyAll,
  verifyVendor,
  verifyAdmin,
} = require("../middleware/authMiddleware");

const ItemRouter = require("express").Router();

ItemRouter.get("/:itemId", verifyAll, itemController.getItemById);
ItemRouter.get("/shop/:shopId", verifyAll, itemController.getItemByShop);
ItemRouter.post("/addItem", verifyVendor, itemController.addItem);
ItemRouter.delete("/:itemId", verifyVendor, itemController.deleteItemById);
ItemRouter.put("/:itemId", verifyVendor, itemController.updateItemById);
ItemRouter.patch("/:itemId", verifyVendor, itemController.updateItemById);

module.exports = ItemRouter;
