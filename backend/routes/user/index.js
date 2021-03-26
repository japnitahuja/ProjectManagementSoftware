const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../../models/user");
require("../../models/project");
require("../../models/steps");
require("../../models/task");
require("../../models/purchase_order");
require("../../models/purchase_order_item");

const User = mongoose.model("User");
const Task = mongoose.model("Task");
const Project = mongoose.model("Project");
const PurchaseOrder = mongoose.model("purchaseOrder");
const PurchaseOrderItem = mongoose.model("purchaseOrderItem");
const Step = mongoose.model("Step");

//USER_ID: "6034cb2baed4be0890904a06"
//PROJECT_ID: "6034cceed06e2a4938562970"
//TASK_ID: 6034cd87d06e2a4938562971

//all projects list
router.route("/all-projects/:userId").get(async (req, res) => {
  try {
    var projects = await User.findOne({ _id: req.params.userId })
      .populate({
        path: "projects",
      })
      .select("projects");
    res.status(200).json({ done: true, projects });
  } catch (error) {
    console.log(error);
    res.status(422).json({ done: false, error: error });
  }
});

//getting a particular project
router
  .route("/project/:projectId")
  .get(async (req, res) => {
    try {
      var project = await Project.findOne({
        _id: req.params.projectId,
      }).populate([
        {
          path: "tasks",
        },
        {
          path: "purchaseOrders",
          populate: { path: "purchasedItems" },
        },
      ]);
      res
        .status(200)
        .json({ done: true, message: "project is fetched", project });
    } catch (error) {
      console.log(error);
    }
  })
  //deleting a particular project without the ppurchase orders and the purchase order items
  .delete(async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    try {
      var user = await User.findOne({ _id: userId });
      var project = await Project.findOne({ _id: req.params.projectId });
      var tasks = await project.tasks.map((task) => {
        return task;
      });
      console.log(tasks, "list of tasks");
      for (var task of tasks) {
        console.log(task);
        var individualTask = await Task.findOne({ _id: task });
        console.log(individualTask, "individual tasks");
        console.log(individualTask.steps, "steps for the task");
        for (var step of individualTask.steps) {
          console.log(step);
          var steps = await Step.findOneAndDelete({ _id: step });
        }
        var taskToDelete = await Task.findOneAndDelete({ _id: task });
      }
      var projectToDelete = await Project.findOneAndDelete({
        _id: req.params.projectId,
      });
      // let UserProjects = await user.projects;
      // let updatedProjects = await UserProjects.indexOf(req.params.projectId)
      // if(updatedProjects > -1){
      //   UserProjects.splice(updatedProjects, 1)
      // }
      // user.projects = await UserProjects
      // user.save()
      res.json({ done: true, message: "project deleted", project });
    } catch (error) {
      console.log(error);
    }
  });

//create a new project
router.post("/create-project/:userId", async (req, res) => {
  var { projectName, projectStatus } = req.body;
  if (!projectName || !projectStatus) {
    res.status(422).json({ error: "Fill all the fields", done: false });
  } else {
    try {
      var project = await Project.create({ projectName, projectStatus });
      var user = await User.findOne({ _id: req.params.userId });
      await user.projects.push(project._id);
      user.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      res.status(200).json({ message: "Project Created", done: true });
    } catch (error) {
      console.log(error);
      res.status(422).json({ error: error, done: false });
    }
  }
});

//create a new task
router.post("/create-task/:projectId", async (req, res) => {
  var { taskName, taskStartDate, taskEndDate, userId } = req.body;
  if (!taskName || !taskStartDate || !taskEndDate || !userId) {
    res.status(422).json({ error: " fill all the fields", done: false });
  } else {
    try {
      var project = await Project.findOne({ _id: req.params.projectId });
      var task = await Task.create({
        taskName,
        taskStartDate,
        taskEndDate,
        taskOwner: userId,
      });
      res.status(200).json({ message: "Task Created", done: true, task });
      console.log(task._id);
      await project.tasks.push(task._id);
      project.save(function (err) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("task added to project");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//get all tasks for a project
router.get("/project/:projectId/task", async (req, res) => {
  try {
    let tasks = await Project.findOne({ _id: req.params.projectId })
      .populate({
        path: "tasks",
      })
      .select("tasks");
    res
      .status(200)
      .json({ message: "List of tasks of the project", done: true, tasks });
  } catch (error) {
    console.log(error);
  }
});

//get a prticular task
router
  .route("/task/:taskId")
  .get(async (req, res) => {
    try {
      var task = await Task.findOne({ _id: req.params.taskId }).populate([
        {
          path: "steps",
        },
        {
          path: "purchaseOrders",
          populate: { path: "purchasedItems" },
        },
      ]);
      res.status(200).json({ done: true, message: "task is fetched", task });
    } catch (error) {
      console.log(error);
    }
  })
  //deleting a particular task and the steps related to it
  .delete(async (req, res) => {
    try {
      var { projectId } = req.body;
      console.log(projectId, req.params.taskId);
      var task = await Task.findOne({ _id: req.params.taskId });
      console.log("task to be delete", task);
      for (var step of task.steps) {
        var stepsToDelete = await Step.findOneAndDelete({ _id: step });
      }
      for (var po of task.purchaseOrders) {
        var purchaseOrder = await PurchaseOrder.findOneAndDelete({ _id: po });
      }
      task.delete();

      var project = await Project.findOne({ _id: projectId });
      let tasks = await project.tasks;
      console.log("task array before delete", tasks);
      let idTaskToDelete = await tasks.indexOf(req.params.taskId);
      let updatedTasks = await tasks.filter((v, i) => i !== idTaskToDelete);
      console.log("task array after delete", updatedTasks);
      project.tasks = await updatedTasks;
      project.save();
      res.status(200).json({ done: true });
    } catch (error) {
      console.log(error);
    }
  });

//create a step
router.post("/create-step/:taskId", async (req, res) => {
  var { stepName, questionStatement, questionType } = req.body;
  if (!stepName) {
    res.status(422).json({ error: " fill all the fields", done: false });
  } else {
    try {
      var task = await Task.findOne({ _id: req.params.taskId });
      var step = await Step.create({
        stepName,
        relatedTask: req.params.taskId,
        questionStatement: questionStatement,
        questionType: questionType,
      });
      await task.steps.push(step._id);
      task.totalSteps = (task.totalSteps) + 1;
      task.completionPercentage =
        ((await task.completedSteps) / task.totalSteps) * 100;
      task.save(function (err) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("Step related to task");
        }
      });
      res
        .status(200)
        .json({ done: true, message: "Step for the task created", step });
    } catch (error) {
      console.log(error);
    }
  }
});

//get steps for a task
router.get("/task/:taskId/step", async (req, res) => {
  try {
    let steps = await Task.findOne({ _id: req.params.taskId })
      .populate({
        path: "steps",
      })
      .select("steps");
    res
      .status(200)
      .json({ message: "All the steps related to task", done: true, steps });
  } catch (error) {
    console.log(error);
  }
});

//get a particular step
router
  .route("/step/:stepId")
  .get(async (req, res) => {
    try {
      var step = await Step.findOne({ _id: req.params.stepId });
      res.status(200).json({ done: true, message: "task is fetched", step });
    } catch (error) {
      console.log(error);
    }
  })
  //delete a particular step
  .delete(async (req, res) => {
    try {
      const { taskId } = req.body;
      var step = await Step.findByIdAndDelete({ _id: req.params.stepId });
      var task = await Task.findOne({ _id: taskId });
      let allSteps = await task.steps;
      let deletedStepId = await allSteps.indexOf(req.params.stepId);
      let updatedSteps = await allSteps.filter((v, i) => i != deletedStepId);
      task.steps = await updatedSteps;
      task.totalSteps = (await task.totalSteps) - 1;
      step.isStepDone
        ? (task.completedSteps = (await task.completedSteps) - 1)
        : null;
      task.completionPercentage =
        ((await task.completedSteps) / task.totalSteps) * 100;
      task.save();
      res.json({ message: "step deleted", done: true }).status(200);
    } catch (error) {
      console.log(error);
    }
  });

//creating a purchase order
router.post("/create-purchase-order/:taskId", async (req, res) => {
  var {
    orderFrom,
    totalOrderAmount,
    totalPaidAmount,
    userId,
    projectId,
    purchasedItem,
  } = req.body;
  if (
    !orderFrom ||
    !totalOrderAmount ||
    !purchasedItem ||
    !totalPaidAmount ||
    !userId ||
    !projectId
  ) {
    res.status(422).json({ error: "Fill all the fields", done: false });
  } else {
    try {
      let task = await Task.findOne({ _id: req.params.taskId });
      let project = await Project.findOne({ _id: projectId });
      let purchaseOrder = await PurchaseOrder.create({
        orderFrom,
        totalOrderAmount,
        totalPaidAmount,
        user: userId,
        purchasedItem,
      });
      await task.purchaseOrders.push(purchaseOrder._id);
      task.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      console.log("project po", project);
      await project.purchaseOrders.push(purchaseOrder._id);
      project.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      res.status(200).json({
        message: "Purchase order created and linked to the task",
        done: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//geting the purchase order for a task
router.get("/task/:taskId/purchaseOrder", async (req, res) => {
  try {
    var purchaseOrders = await Task.find({ _id: req.params.taskId })
      .populate({
        path: "purchaseOrders",
      })
      .select("purchaseOrders");
    res.status(200).json({
      message: "All purchase orders linked to the task",
      done: true,
      purchaseOrders,
    });
  } catch (error) {
    console.log(error);
  }
});

//getting puchase orders for a project
router.get("/project/:projectId/purchaseOrders", async (req, res) => {
  try {
    var purchaseOrder = await Project.findOne({ _id: req.params.projectId })
      .populate({
        path: "purchaseOrders",
      })
      .select("purchaseOrders");
    res.status(200).json({
      message: "All purchase orders linked to the project",
      done: true,
      purchaseOrder,
    });
  } catch (error) {
    console.log(error);
  }
});

//creating purchase order items
router.post(
  "/create-purchase-order-items/:purchaseOrderId",
  async (req, res) => {
    var { itemName, itemNumber, itemsShipped, itemValue } = req.body;
    if (!itemName || !itemNumber || !itemsShipped || !itemValue) {
      res.status(422).json({ error: "Fill all the fields", done: false });
    } else {
      try {
        let purchaseOrder = await PurchaseOrder.findOne({
          _id: req.params.purchaseOrderId,
        });
        let purchaseOrderItem = await PurchaseOrderItem.create({
          itemName,
          itemNumber,
          itemsShipped,
          itemValue,
        });
        await purchaseOrder.purchasedItems.push(purchaseOrderItem._id);
        purchaseOrder.save(function (err) {
          if (err) {
            console.log(err);
            return;
          }
        });
        res.status(200).json({
          message: "Purchase order items created and linked to the order",
          done: true,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
);

//geting purchase order
router.get("/purchaseOrder/:purchaseOrderId", async (req, res) => {
  try {
    var PO = await PurchaseOrder.findOne({
      _id: req.params.purchaseOrderId,
    }).populate({
      path: "purchasedItems",
    });
    res.status(200).json({ message: "PO Fetched", done: true, PO });
  } catch (error) {
    console.log(error);
  }
});

//completing a task
router.post("/complete-task/:taskId", async (req, res) => {
  try {
    var task = await Task.findOne({ _id: req.params.taskId });
    if (task.completionPercentage === 100) {
      task.isTaskDone = true;
      task.save();
      res.status(200).json({ message: "Task Completed", done: true });
    } else {
      res
        .status(200)
        .json({ error: "Complete all the steps first!", done: false });
    }
  } catch (error) {
    console.log(error);
  }
});

//completing a step
router.post("/complete-step/:stepId", async (req, res) => {
  try {
    const { taskId } = req.body;
    var step = await Step.findOne({ _id: req.params.stepId });
    if (step.questionStatement && step.isQuestionAnswered === false) {
      res
        .status(200)
        .json({ error: "Answer the step question first", done: false });
      return;
    }
    //var taskId = await step.relatedTask[0].toString();
    var task = await Task.findOne({ _id: taskId });
    step.isStepDone =  true;
    step.save();
    task.completedSteps = (await task.completedSteps) + 1;
    task.completionPercentage =
    ((await task.completedSteps) / task.totalSteps) * 100;
    task.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ message: "Step Done!", done: true });
  } catch (error) {
    console.log(error);
  }
});

//completing step question
router.post("/complete-step-question/:stepId", async (req, res) => {
  try {
    var step = await Step.findOne({ _id: req.params.stepId });
    if (step.questionStatement) {
      step.isQuestionAnswered = true;
      step.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
      res.status(200).json({ message: "Question Answered", done: true });
    } else {
      res.status(200).json({ error: "There is no question", done: false });
    }
  } catch (error) {
    console.log(error);
  }
});

//creating a template
router.post("/test-template", async (req, res) => {
  var testTemplate = [
    {
      taskName: " Template task 1",
      steps: [
        {
          stepName: "Template task 1 step 1",
          stepQuestion: "Template task 1 step 1 question 1",
          questionType: "yes/no",
        },
        {
          stepName: "template task 1 step 2",
          stepQuestion: "template task 1 question 2",
        },
      ],
      purchaseOrders: [
        {
          orderFrom: "template task 1 PO1",
          totalOrderAmount: 100,
          totalPaidAmount: 50,
          purchasedItem: "template task 1 item",
          purchasedItems: [
            {
              itemName: "template task 1 item 1",
              itemNumber: 10,
              itemsShipped: 5,
              itemValue: 50,
            },
            {
              itemName: "template task 1 item 2",
              itemNumber: 10,
              itemsShipped: 5,
              itemValue: 50,
            },
          ],
        },
      ],
    },
    {
      taskName: "template task 2",
      steps: [],
      purchaseOrders: [],
    },
    {
      taskName: "template task 3",
      steps: [
        {
          stepName: "template task 3 step 1",
        },
      ],
      purchaseOrders: [
        {
          orderFrom: "template task 3 PO1",
          totalOrderAmount: 100,
          totalPaidAmount: 50,
          purchasedItem: "template task 3 item",
        },
      ],
    },
  ];
  var { projectName, projectStatus, userId } = req.body;
  try {
    var project = await Project.create({
      projectName,
      projectStatus,
    });
    var user = await User.findOne({ _id: userId });
    await user.projects.push(project._id);
    user.save(function (err) {
      console.log(err, "user save err");
    });

    for (var tasks of testTemplate) {
      try {
        var task = await Task.create({
          taskName: tasks.taskName,
          taskStartDate: "02-02-2001",
          taskEndDate: "03-03-2001",
          taskOwner: userId,
        });
        console.log("task id of", `${tasks.taskName}`, task._id);
        await project.tasks.push(task._id);
        //creating steps
        for (var steps of tasks.steps) {
          try {
            var step = await Step.create({
              stepName: steps.stepName,
              questionStatement: steps.stepQuestion,
              questionType: steps.questionType,
            });
            console.log("step id of", `${steps.stepName}`, step._id);
            task.totalSteps = (await task.totalSteps) + 1;
            await task.steps.push(step._id);
          } catch (error) {
            console.log(error);
          }
        }
        //creating purchase orders
        for (var POs of tasks.purchaseOrders) {
          try {
            var purchaseOrder = await PurchaseOrder.create({
              orderFrom: POs.orderFrom,
              totalOrderAmount: POs.totalOrderAmount,
              totalPaidAmount: POs.totalPaidAmount,
              purchasedItem: POs.purchasedItem,
            });
            console.log("PO id of", `${POs.purchasedItem}`, purchaseOrder._id);
            await task.purchaseOrders.push(purchaseOrder._id);
            await project.purchaseOrders.push(purchaseOrder._id);
            if (POs.purchasedItems) {
              for (var POitem of POs.purchasedItems) {
                try {
                  var purchasedItems = await PurchaseOrderItem.create({
                    itemName: POitem.itemName,
                    itemNumber: POitem.itemNumber,
                    itemsShipped: POitem.itemsShipped,
                    itemValue: POitem.itemValue,
                  });
                  console.log(
                    "PO item id of",
                    `${purchasedItems._id}`,
                    purchasedItems._id
                  );
                  await purchaseOrder.purchasedItems.push(purchasedItems._id);
                } catch (error) {
                  console.log(error);
                }
              }
            }
            purchaseOrder.save();
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
      task.save(function (err) {
        console.log("task save");
        if (err) {
          console.log(err);
        }
      });
    }
    project.save(function (err) {
      console.log("project save");
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ done: true, project, task, step, purchaseOrder });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
