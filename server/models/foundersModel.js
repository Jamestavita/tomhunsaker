import mongoose from "mongoose";

const foundersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    founderInfo: {
      type: Object,
      require: true,
    },
    assessmentInfo: {
      type: Array,
      require: true,
    },
    score: {
      type: Number,
      require: true,
      default: 0,
    },
    level: {
      type: Number,
      require: true,
      default: 0,
    },
    plan: {
      type: String,
      require: true,
      default: "Free",
    },
    paymentInfo: {
      type: Object,
    },
  },
  { timestamps: true }
);

const Founders = mongoose.model("Founders", foundersSchema);

export default Founders;
