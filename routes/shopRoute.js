const shopController = require("../controllers/shopController");

const {
  verifyAdmin,
  verifyAll,
  verifyVendor,
} = require("../middleware/authMiddleware");

const shopRouter = require("expess").Router();

shopRouter.get("/:shopId", verifyAll, shopController.getShopById);
shopRouter.post("/addShop", verifyVendor, shopController.insertShop);
shopRouter.put("/:shopId", verifyVendor, shopController.updateShopById);
shopRouter.delete("/:shopId", verifyVendor, shopController.deleteShopById);

module.exports = shopRouter;
