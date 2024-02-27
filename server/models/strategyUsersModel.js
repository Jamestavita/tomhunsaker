import mongoose from "mongoose";

const strategyUsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    user_info: {
      type: Object,
      require: true,
    },
    assessment_info: {
      type: Object,
      require: true,
    },
    points: {
      type: Object,
      require: true,
    },
    total_score: {
      type: Number,
      require: true,
      default: 0,
    },
    level: {
      type: Number,
      require: true,
      default: 1,
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

const StrategyUsers = mongoose.model("Strategy_Users", strategyUsersSchema);

export default StrategyUsers;
