const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    items: { type: Array },
    isAvailable: { type: Boolean, default: true },
    owner: { type: String, required: true },
    code: { type: String, required: true },
    logoUrl: {
      type: String,
      required: true,
      default:
        "https://media.istockphoto.com/id/1460743033/photo/composition-with-a-variety-of-metal-tools.webp?b=1&s=170667a&w=0&k=20&c=AppJ0j10F5KHnOquOSnSkahMKyWobbuAs7LkaEBHd3s=",
    }
  },
);

module.exports = mongoose.model("Shop", shopSchema);