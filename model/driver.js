import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
    },

    kilometer: {
      type: String,
    },
    place: {
      type: String,
    },
    DLRNO: {
      type: String,
      required: true,
    },
    vehicleNo: {
      type: String,
    },
    DLRCountry: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    PicturePath: {
      type: String,
    },
    DLRImage: {
      type: String,
    },
    Approval: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: true,
    },
    wallet: {
        transactions: [
          {
            transactionID: {
              type: String,
            },
            method: {
              type: String,
            },
            cash: {
              type: Number,
            },
          },
        ],
        Amount: {
          type: Number,
          default: 0,
        },
      },
    Rate: {
      type: Number,
      default: 10,
    },
    onRide: {
      type: Boolean,
      default: false,
    },
    current_location: {
      location: { type: Array, default: [] },
      status: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const DriverModel = mongoose.model("Driver", DriverSchema);

export default DriverModel;
