const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "Please provide a task name"],
  },
  taskStartDate: {
    type: Date,
    required: [true, "Please provide a start date for your project"],
  },
  taskEndDate: {
    type: Date,
    required: [true, "Please provide an end date to your task"],
  },
  taskDuration: {
    type: Date,
  },
  isTaskDone: {
    type: Boolean,
    default: false,
  },

  taskOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  totalSteps: {
    type: Number
  },
  completedSteps: {
    type: Number
  },
  completionPercentage: {
    type: Number
  },
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Step",
    },
  ],
  purchaseOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "purchaseOrder",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
mongoose.model("Task", taskSchema);
