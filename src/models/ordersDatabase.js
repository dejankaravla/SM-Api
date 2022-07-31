import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  client: {
    type: String,
    required: [true, "Clients Name is missing"],
  },
  clientID: {
    type: String,
    requrid: [true, "Client ID is missing"],
  },
  createdBy: {
    type: {
      name: {
        type: String,
        required: [true, "Creators Name is missing"],
      },
      creatorId: {
        type: String,
        required: [true, "Creators ID is missing"],
      },
    },
    required: true,
  },
  clientType: {
    type: String,
    required: [true, "Clients Type is missing"],
  },
  dateCreated: {
    type: Date,
    required: [true, "Created Date is missing"],
  },
  dateModified: {
    type: Date,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  orderStatus: {
    type: String,
    required: [true, "Order Status is missing"],
  },
  products: {
    type: [
      {
        name: {
          type: String,
          required: [true, "Product Name is missing"],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is missing"],
        },
        images: {
          type: [String],
          required: false,
        },
        price: {
          type: "Number",
          required: [true, "Product Price is missing"],
        },
        purchasePrice: {
          type: "Number",
          required: [true, "Product Purchase Price is missing"],
        },
        balance: {
          type: Number,
          required: [true, "Product Balance is missing"],
        },
        totalPrice: {
          type: "Number",
          required: [true, "Product Total Price is missing"],
        },
      },
    ],
    required: [true, "Products are missing"],
  },
  orderPrice: {
    type: Number,
    required: [true, "Order Price is missing"],
  },
  totalPurchasePrice: {
    type: Number,
    requrid: [true, "Order Purchase Price is missing"],
  },
  paid: {
    type: Boolean,
    required: [true, "Paid Status is missing"],
  },
  balance: {
    type: Number,
    required: [true, "Order Balance is missing"],
  },
});

export default mongoose.model("Orders", ordersSchema);
