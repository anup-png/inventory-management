import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    order_id: 
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true 
    },

    quantity: {
        type: Number,
        required: true 
    },

    price: {
        type: Number,
        required: true 
    },

    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true 
    },
    },
    {
        timestamps: true,
    }
);

const OrderItems = mongoose.model("OrderItems", orderItemsSchema);