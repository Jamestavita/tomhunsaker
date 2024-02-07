import mongoose from "mongoose";
const stayInformedSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const StayInformed = mongoose.model("StayInformed", stayInformedSchema);

export default StayInformed