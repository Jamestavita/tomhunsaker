import mongoose from "mongoose";
const subscriberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    organization: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
