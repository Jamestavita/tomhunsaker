import mongoose from "mongoose";

const fundersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    funderInfo: {
      type: Object,
      require: true,
    },
    assessmentInfo: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

const Funders = mongoose.model("Funders", fundersSchema);

export default Funders;
