const moongoose = require("mongoose");
const itemSchema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["Sweet", "Spicy", "Sour"],
    require: true
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  }
});


const itemMenu = moongoose.model("itemMenu", itemSchema);
module.exports = itemMenu;