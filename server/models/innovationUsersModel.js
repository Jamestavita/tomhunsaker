import mongoose from "mongoose";

const innovationUsersSchema = mongoose.Schema(
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

const InnovationUsers = mongoose.model("Innovation_Users", innovationUsersSchema);

export default InnovationUsers;
