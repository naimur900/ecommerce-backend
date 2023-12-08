const Shop = require("../model/Shop");

const insertShop = async (req, res) => {
  try {
    const shop = new Shop(req.body);
    await shop.save();
  } catch (error) {
    res.status(400).json({
      status: false,
      Message: error.Message,
    });
  }
};

const getShopById = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      res.status(404).json({
        status: false,
        message: "Shop is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Shop is found",
        shop: shop,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteShopById = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      res.status(404).json({
        status: false,
        message: "Shop is not found",
      });
    } else {
      await Shop.findByIdAndDelete(shopId);
      res.status(200).json({
        status: true,
        message: "Shop deleted successfully",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const updateShopById = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      res.status(404).json({
        status: false,
        message: "Shop not found",
      });
    } else {
      const updatedShop = await Shop.findByIdAndUpdate(shopId, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: true,
        message: "Shop updated successfully",
        updatedShop: updatedShop,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { insertShop, deleteShopById, getShopById, updateShopById };
