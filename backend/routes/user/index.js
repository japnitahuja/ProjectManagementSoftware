const { response } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../../models/user");
require("../../models/project");
require("../../models/steps");
require("../../models/task");
require("../../models/purchase_order");
require("../../models/purchase_order_item");
require("../../models/change_order");
require("../../models/change_order_item");
require("../../models/cost_book");
require("../../models/punch_list");
require("../../models/organisation");
const nodemailer = require("nodemailer");

const User = mongoose.model("User");
const Task = mongoose.model("Task");
const Project = mongoose.model("Project");
const PurchaseOrder = mongoose.model("purchaseOrder");
const PurchaseOrderItem = mongoose.model("purchaseOrderItem");
const Step = mongoose.model("Step");
const PunchList = mongoose.model("punchList");
const ChangeOrder = mongoose.model("changeOrder");
const ChangeOrderItem = mongoose.model("changeOrderItem");
const CostBook = mongoose.model("CostBook");
const Organisation = mongoose.model("Organisation");
const authenticate = require("./../../middleware/authenticate");
const authorize = require("./../../middleware/restrictTo");
//USER_ID: "6034cb2baed4be0890904a06"
//PROJECT_ID: "6034cceed06e2a4938562970"
//TASK_ID: 6034cd87d06e2a4938562971

//create organisation
router.post("/create-organisation/:userId", async (req, res) => {
  const {
    organisationName,
    organisationAddress,
    organisationNumber,
    organisationEmail,
  } = req.body;
  try {
    const user = await User.findOne({ _id: req.params.userId });
    const org = await Organisation.create({
      organisationName,
      organisationAddress,
      organisationNumber,
      organisationEmail,
    });
    org.organisationOwner = req.params.userId;
    const orgInfo = {
      organisation: org._id,
    };
    user.projects.push(orgInfo);
    await org.save();
    await user.save();
    res.json({ message: "Organisation Created!", done: true, org }).status(200);
  } catch (error) {
    console.log(error);
  }
});

//get organisation
router.get('/org/:orgId', async (req, res) => {
  try {
    const org = await Organisation.findById(req.params.orgId)
    console.log(org)
    res.status(200).json({message: 'org fetched', org, done: true})
  } catch (error) {
    console.log(error)
  }
})

//get all user org
router.get("/organisation/:userId", async (req, res) => {
  try {
    let org = await User.findOne({ _id: req.params.userId }).populate({
      path: "projects",
      populate: { path: "organisation" },
      select: "projects",
    });
    org = org.projects;
    res.json({ message: "Orgs fetched", done: true, org });
  } catch (error) {
    console.log(error);
  }
});

//get orgainsation projects for a user
router.get("/projects/:orgId", async (req, res) => {
  try {
    const org = await Organisation.findById(req.params.orgId).populate([
      {
        path: "projects",
      },
      {
        path: "organisationOwner",
      },
      {
        path: "organisationMembers",
      },
    ]);
    res.status(200).json({ message: "organisation fetched", done: true, org });
  } catch (error) {
    console.log(error);
  }
});

//user
router.get("/user/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    // .populate({
    //   path: "projects",
    //   populate: { path: "organisation organisationProjects" },
    // });
    res.status(200).json({ message: "User", user });
  } catch (error) {
    console.log(error);
  }
});

//create a new project
router.post("/create-project/:userId", async (req, res) => {
  var {
    organisationId,
    projectName,
    projectBudget,
    projectFinishDate,
    projectLocation,
    projectStatus,
    projectType,
    propertyType,
  } = req.body;
  var { userId } = req.params;
  if (!projectName || !projectStatus) {
    res.status(422).json({ error: "Fill all the fields", done: false });
  } else {
    try {
      var project = await Project.create({
        projectName,
        projectStatus,
        projectOwner: userId,
        projectType,
        propertyType,
        projectBudget,
        projectFinishDate,
        projectLocation,
        projectRoles: ["Intern", "Constuction-worker"],
      });
      let user = await User.findOne({ _id: req.params.userId });
      // API for organisation unomment this------>
      let organisation = await Organisation.findById(organisationId);
      console.log(organisation)
      organisation.projects.push(project._id);
      user.projects.map((pro) => {
        if (pro.organisation == organisationId) {
          pro.organisationProjects.push(project._id);
        }
      });
      await organisation.save();
      //--------->
      const userDetails = {
        user: userId,
        permission: "BILLING ADMIN",
        role: "GOD",
      };
      // delete this when changing to organisation ---->
      // project.Users.push(userDetails);
      // ------>
      await user.save();
      await project.save();
      res.status(200).json({ message: "Project Created", done: true });
    } catch (error) {
      console.log(error);
      res.status(422).json({ error: error, done: false });
    }
  }
});

//all Projects List with the organisations
router.get("/all-projects/:userId/:orgId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate({
      path: "projects",
      populate: { path: "organisationProjects" },
      // match: doc => ({published: {$ne: false}})
    });
    console.log(user);
    let projects = [];
    user.projects.map((project) => {
      if (project.organisation == req.params.orgId) {
        projects = project.organisationProjects;
      }
    });
    res.json({ message: "Projects", done: true, projects });
  } catch (error) {
    console.log(error);
  }
});

//all projects list without the organisations
router.route("/all-projects/:userId").get(async (req, res) => {
  try {
    var projects = await User.findOne({ _id: req.params.userId })
      .populate({
        path: "projects",
        // match: doc => ({published: {$ne: false}})
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
        {
          path: "changeOrders",
          populate: { path: "purchasedItems" },
        },
        {
          path: "Users",
          populate: { path: "user", select: "firstName lastName email" },
        },
        {
          path: "projectOwner",
          select: "firstName lastName email",
        },
        {
          path: "punchList",
        },
      ]);
      project.totalTasks = await project.tasks.length;
      project.save();
      console.log("task length while fetching the project", project.totalTasks);
      res
        .status(200)
        .json({ done: true, message: "project is fetched", project });
    } catch (error) {
      console.log(error);
    }
  })
  //deleting a particular project
  .delete(async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    try {
      var user = await User.findOne({ _id: userId });
      var project = await Project.findOne({ _id: req.params.projectId });
      var tasks = await project.tasks.map((task) => {
        return task;
      });
      var POs = await project.purchaseOrders.map((PO) => {
        return PO;
      });
      for (var PO of POs) {
        console.log("purchase order id", PO);
        let purchaseOrder = await PurchaseOrder.findOne({ _id: PO });
        if (purchaseOrder) {
          let POitems = await purchaseOrder.purchasedItems.map((POitem) => {
            PurchaseOrderItem.findOneAndDelete({ _id: POitem });
            console.log("purchase order item id", POitem);
          });
          PurchaseOrder.findOneAndDelete({ id: PO });
        }
      }
      console.log(tasks, "list of tasks");
      for (var task of tasks) {
        console.log(task);
        var individualTask = await Task.findOne({ _id: task });
        console.log(individualTask, "individual tasks");
        if (individualTask) {
          console.log(individualTask.steps, "steps for the task");
          for (var step of individualTask.steps) {
            console.log(step);
            var steps = await Step.findOneAndDelete({ _id: step });
          }
          var taskToDelete = await Task.findOneAndDelete({ _id: task });
        }
      }
      var projectToDelete = await Project.findOneAndDelete({
        _id: req.params.projectId,
      });
      let UserProjects = await user.projects;
      console.log("user projects before delete", UserProjects);
      let projectId = await UserProjects.indexOf(req.params.projectId);
      let updatedProjects = await UserProjects.filter(
        (v, i) => i !== projectId
      );
      console.log("user projects after delete", updatedProjects);
      user.projects = await updatedProjects;
      user.save();
      res.json({ done: true, message: "project deleted", project });
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(
        req.params.projectId,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log("project updated", project);
      res.status(200).json({ message: "project updated", done: true, project });
    } catch (error) {
      console.log(error);
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
      await project.tasks.push(task._id);
      project.totalTasks = await project.tasks.length;
      console.log("total tasks", project.totalTasks);
      project.save();
      res.status(200).json({ message: "Task Created", done: true, task });
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
        {
          path: "changeOrders",
          populate: { path: "purchasedItems" },
        },
        {
          path: "taskOwner",
          select: "firstName lastName",
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
      let completedTasks = await project.completedTasks;
      console.log("task array before delete", tasks);
      let idTaskToDelete = await tasks.indexOf(req.params.taskId);
      let updatedTasks = await tasks.filter((v, i) => i !== idTaskToDelete);
      console.log("task array after delete", updatedTasks);
      tasks = await updatedTasks;
      console.log("updated tasks list", project.tasks);
      console.log("updated tasks number", project.tasks.length);
      if (task.isTaskDone == true) {
        completedTasks = (await completedTasks) - 1;
        project.completedTasks = await completedTasks;
        console.log(completedTasks, "completed tasks");
      }
      await project.save(function (err) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("Project tasks updated after delete");
        }
      });
      res.status(200).json({ done: true });
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.taskId,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log("task updated", task);
      res.status(200).json({ message: "task updated", done: true, task });
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
      task.totalSteps = (await task.totalSteps) + 1;
      task.completionPercentage =
        ((await task.completedSteps) / task.totalSteps) * 100;
      task.isTaskDone = await false;
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
  })
  .put(async (req, res) => {
    try {
      const step = await Step.findByIdAndUpdate(
        req.params.stepId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ message: "task updated", done: true, step });
    } catch (error) {
      console.log(error);
    }
  });

//list of all the payees
router.get("/payees/:projectId", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId).populate({
      path: "users",
      populate: { path: "user" },
    });
    let finalUsers = [];
    project.users.map((user) => {
      if (user.role == "TRADE PARTNER") {
        finalUsers.push(user.user);
      }
    });
    res.status(200).json({ message: "Payees", done: true, finalUsers });
  } catch (error) {
    console.log(error);
  }
});

//creating a purchase order
router.post("/create-purchase-order/:taskId", async (req, res) => {
  var {
    PoTitle,
    userId,
    projectId,
    purchasedItem,
    payee, //send payee id here
    group,
    terms,
    dueDate,
  } = req.body;
  if (
    !PoTitle
    // !totalOrderAmount ||
    // !purchasedItem ||
    // !userId ||
    // !projectId
  ) {
    res.status(422).json({ error: "Fill all the fields", done: false });
  } else {
    try {
      let task = await Task.findOne({ _id: req.params.taskId });
      let project = await Project.findOne({ _id: projectId });
      let purchaseOrder = await PurchaseOrder.create({
        Potitle,
        payee,
        group,
        terms,
        dueDate,
        orderFrom,
        totalOrderAmount,
        totalPaidAmount,
        PoCreatedBy: userId,
        purchasedItem,
      });
      task.purchaseOrders.push(purchaseOrder._id);
      await task.save();
      console.log("project po", project);
      project.purchaseOrders.push(purchaseOrder._id);
      await project.save();
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
    var purchaseOrders = await Task.find({ _id: req.params.taskId }).populate(
      {
        path: "purchaseOrders",
      },
      {
        path: "PoCreatedBy",
      },
      {
        path: "payee",
      }
    );
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
    var purchaseOrder = await Project.findOne({
      _id: req.params.projectId,
    }).populate(
      {
        path: "purchaseOrders",
      },
      {
        path: "PoCreatedBy",
      },
      {
        path: "payee",
      }
    );
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
    let {
      itemName,
      itemNumber, //item quantity
      itemValue, //item rate
      comment,
    } = req.body;
    if (!itemName) {
      res.status(422).json({ error: "Fill all the fields", done: false });
    } else {
      try {
        let purchaseOrder = await PurchaseOrder.findOne({
          _id: req.params.purchaseOrderId,
        });
        let purchaseOrderItem = await PurchaseOrderItem.create({
          itemName,
          itemNumber,
          itemValue,
          comment,
        });
        purchaseOrder.purchasedItems.push(purchaseOrderItem._id);
        await purchaseOrder.save();
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

//editing a purchase order
router.put("/purchaseOrder/:purchaseOrderId", async (req, res) => {
  const PO = await PurchaseOrder.findByIdAndUpdate(
    req.params.purchaseOrderId,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json({ message: "PO updated", done: true, PO });
});

//creating a change order
router.post("/create-change-order/:taskId", async (req, res) => {
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
      let changeOrder = await ChangeOrder.create({
        orderFrom,
        totalOrderAmount,
        totalPaidAmount,
        user: userId,
        purchasedItem,
      });
      await task.changeOrders.push(changeOrder._id);
      task.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      console.log("project co", project);
      await project.changeOrders.push(changeOrder._id);
      project.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      res.status(200).json({
        message: "Change order created and linked to the task",
        done: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//geting the change order for a task
router.get("/task/:taskId/changeOrder", async (req, res) => {
  try {
    var changeOrders = await Task.find({ _id: req.params.taskId })
      .populate({
        path: "changeOrders",
      })
      .select("changeOrders");
    res.status(200).json({
      message: "All change orders linked to the task",
      done: true,
      changeOrders,
    });
  } catch (error) {
    console.log(error);
  }
});

//getting change order for a project
router.get("/project/:projectId/changeOrders", async (req, res) => {
  try {
    var changeOrder = await Project.findOne({ _id: req.params.projectId })
      .populate({
        path: "changeOrders",
      })
      .select("changeOrders");
    res.status(200).json({
      message: "All change orders linked to the project",
      done: true,
      changeOrder,
    });
  } catch (error) {
    console.log(error);
  }
});

//creating change order items
router.post("/create-change-order-items/:changeOrderId", async (req, res) => {
  var { itemName, itemNumber, itemsShipped, itemValue } = req.body;
  if (!itemName || !itemNumber || !itemsShipped || !itemValue) {
    res.status(422).json({ error: "Fill all the fields", done: false });
  } else {
    try {
      let changeOrder = await ChangeOrder.findOne({
        _id: req.params.changeOrderId,
      });
      let changeOrderItem = await ChangeOrderItem.create({
        itemName,
        itemNumber,
        itemsShipped,
        itemValue,
      });
      await changeOrder.purchasedItems.push(changeOrderItem._id);
      changeOrder.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      res.status(200).json({
        message: "Change Order items created and linked to the order",
        done: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//geting change order
router.get("/changeOrder/:changeOrderId", async (req, res) => {
  try {
    var CO = await ChangeOrder.findOne({
      _id: req.params.changeOrderId,
    }).populate({
      path: "purchasedItems",
    });
    res.status(200).json({ message: "CO Fetched", done: true, CO });
  } catch (error) {
    console.log(error);
  }
});

//completing a task
router.post("/complete-task/:taskId", async (req, res) => {
  const { projectId } = req.body;
  try {
    var task = await Task.findOne({ _id: req.params.taskId });
    var project = await Project.findOne({ _id: projectId });
    if (task.completionPercentage === 100 || task.steps.length == 0) {
      task.isTaskDone = true;
      task.completionPercentage === 100;
      task.save();
      project.completedTasks = project.completedTasks + 1;
      project.save();
      console.log("projectid", projectId);
      console.log(project.completedTasks, "completed tasks for project");
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
    step.isStepDone = true;
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
router.post("/test-template/:userId", async (req, res) => {
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
          stepName: "Template task 1 step 2",
          stepQuestion: "template task 1 question 2",
        },
      ],
      purchaseOrders: [
        {
          orderFrom: "Template task 1 PO1",
          totalOrderAmount: 100,
          totalPaidAmount: 50,
          purchasedItem: "Template task 1 item",
          purchasedItems: [
            {
              itemName: "Template task 1 item 1",
              itemNumber: 10,
              itemsShipped: 5,
              itemValue: 50,
            },
            {
              itemName: "Template task 1 item 2",
              itemNumber: 10,
              itemsShipped: 5,
              itemValue: 50,
            },
          ],
        },
      ],
    },
    {
      taskName: "Template task 2",
      steps: [],
      purchaseOrders: [],
    },
    {
      taskName: "Template task 3",
      steps: [
        {
          stepName: "Template task 3 step 1",
        },
      ],
      purchaseOrders: [
        {
          orderFrom: "Template task 3 PO1",
          totalOrderAmount: 100,
          totalPaidAmount: 50,
          purchasedItem: "Template task 3 item",
        },
      ],
    },
  ];
  var { projectName, projectStatus } = req.body;
  var userId = req.params.userId;
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

//send the request to trade partner
router.post("/inviteUser", async (req, res) => {
  const { email, permission, role, type, projectId, organisationId } = req.body;
  try {
    console.log(email, projectId);
    const savedUser = await User.findOne({ email: email });
    const project = await Project.findOne({ _id: projectId });
    const org = await Organisation.findOne({_id:organisationId})
    let UserInProject = false, organisationInUser = false, finalUserId, finalUser;
    if (savedUser) {
      savedUser.projects.map((project) => {
        if (project.organisation == organisationId) {
          organisationInUser = true;
          if (project.organisationProjects.includes(projectId)) {
            UserInProject = true;
          }
        }
      })
      console.log(UserInProject, organisationInUser);
      if (UserInProject === true) {
        console.log("user in project");
        res
          .status(422)
          .json({ message: "User already in the project team", done: false });
          return;
      } else {
        console.log("saved user not added in the project");
        finalUserId =  savedUser._id;
        finalUser = savedUser;
        console.log("user id in if else", finalUserId);
        let orgDetails = {
          organisation: organisationId,
        }
        console.log(orgDetails, 'org details')
        if (organisationInUser === false) {
          console.log('user not in organisation.')
          finalUser.projects.push(orgDetails);
          console.log(org)
          // const orgUser = {
          //   user: finalUserId,
          //   permission: 'ORGANISATION-MEMBER'
          // }
          org.organisationMembers.push(finalUserId)
        }
      }
    } else {
      console.log('new user in the application.')
      let user = await User.create({
        email: email,
        permission: permission,
        role: role,
      });
      finalUserId = user._id;
      finalUser = user;
      console.log("user id in if else", finalUserId);
      let orgDetails = {
        organisation: organisationId,
      };

      finalUser.projects.push(orgDetails);
    }
    console.log(finalUserId, "final user id");
    const userDetails = {
      user: finalUserId,
      permission: permission,
      role: role,
    };
    finalUser.projects.map((project) => {
      if (project.organisation == organisationId) {
        project.organisationProjects.push(projectId);
      }
    });
    project.Users.push(userDetails);
    finalUser.save();
    project.save();
    org.save()
    // console.log("projects for user", finalUser.projects);
    // console.log("users in a project", project.Users);
    console.log(finalUser, 'final user after saving.');
    if (type == "saveandinvite") {
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "johnbanana12345john@gmail.com",
          pass: "Banana@123",
        },
      });
      let mailDetails = {
        from: "johnbanana12345john@gmail.com",
        to: email,
        subject: "Test mail",
        text: "hi! this mail has come from node js.",
      };
      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent successfully");
        }
      });
      res.status(200).json({ done: true, message: "Invitation mail sent!" });
    } else {
      res
        .status(200)
        .json({ done: true, message: "User added to the project team" });
    }
  } catch (error) {
    console.log(error);
  }
});



//update user permissions for project
router.post("/updatePermissions/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findOne({ _id: projectId });
    let projectUsers = await project.Users;
    console.log(project);
    await req.body.map(async (userDetail, index) => {
      await projectUsers.map(async (user) => {
        if (userDetail.id == user.user) {
          user.permission = userDetail.updatedPermission;
        }
      });
    });
    await project.save();
    console.log(project.Users);
    res.status(200).json({
      done: true,
      project,
      message: "Permissions updated succesfully!",
    });
  } catch (error) {
    console.log(error);
  }
});

//add new roles and assign it to users
router.post("/updateRoles/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const { allRoles, updatedRoles } = req.body;
  try {
    console.log(req.body);
    const project = await Project.findOne({ _id: projectId });
    project.projectRoles = allRoles;
    console.log(project.projectRoles);
    let projectUsers = project.Users;
    await updatedRoles.map(async (userDetail, index) => {
      //console.log(index, userDetail, 'body user')
      await projectUsers.map(async (user) => {
        //console.log(index, user, 'project user')
        if (userDetail.id == user.user) {
          // console.log(index, userDetail.id, user.user, 'if else user IDs')
          user.role = userDetail.updatedRole;
          //console.log(user.permission)
        }
      });
    });
    project.save(function (err) {
      if (err) console.log(err);
    });
    console.log(project.Users);
    res.status(200).json({
      done: true,
      project,
      message: "Roles updated succesfully!",
      project,
    });
  } catch (error) {
    console.log(error);
  }
});

//delete user from project
router.post("/deleteUser/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    let project = await Project.findOne({ _id: projectId });
    let projectUsers = await project.Users;
    for (const user of req.body) {
      for (const projectUser of projectUsers) {
        if (user == projectUser.user) {
          let idToDelete = projectUsers.indexOf(projectUser);
          console.log(idToDelete);
          let updatedUser = projectUsers.filter((v, i) => i != idToDelete);
          project.Users = updatedUser;
          let user = await User.findOne({ _id: projectUser.user });
          let userProjects = user.projects;
          let projectToDelete = userProjects.indexOf(projectId);
          console.log(projectToDelete);
          let updatedProjects = userProjects.filter(
            (v, i) => i != projectToDelete
          );
          userProjects = updatedProjects;
          user.projects = userProjects;
          console.log(userProjects, "final users projects");
          await user.save();
        }
      }
    }
    console.log(projectUsers, "final project users");
    await project.save();

    res
      .status(200)
      .json({ message: "User deleted from project!", done: true, project });
  } catch (error) {
    console.log(error);
  }
});

//create punch list
router.post("/create-punch-list/:projectId", async (req, res) => {
  const { punchListName, punchListAssignedBy, punchListAssignedTo } = req.body;

  try {
    const project = await Project.findOne({ _id: req.params.projectId });
    const PL = await PunchList.create({
      punchListName,
      punchListAssignedTo,
      punchListAssignedBy,
    });
    await project.punchList.push(PL);
    project.save();
    res.status(200).json({ message: "Punch list created", done: true, PL });
  } catch (error) {
    console.log(error);
  }
});

// create punch list items
router.post("/create-punch-list-item/:punchListId", async (req, res) => {
  const { punchListItemName } = req.body;
  try {
    const PL = await PunchList.findOne({ _id: req.params.punchListId });
    const PLitem = {
      punchListItemName: punchListItemName,
    };
    console.log(PLitem);
    await PL.punchListItems.push(PLitem);
    PL.save();
    res.status(200).json({ message: "PL item created", done: true, PL });
  } catch (error) {
    console.log(error);
  }
});

//getting punch lists for a project
router.get("/punchList/:projectId", async (req, res) => {
  try {
    const PL = await Project.findOne({ _id: req.params.projectId }).populate({
      path: "punchList",
    });
    res.status(200).json({ message: "change orders fetched", done: true, PL });
  } catch (error) {
    console.log(error);
  }
});

//get a particular punch list
router.get("punch-list/:punchListId", async (req, res) => {
  try {
    const CO = await ChangeOrder.findOne({ _id: req.params.punchListId });
    res.json({ message: "Change Order Fetched", done: true, CO });
  } catch (error) {
    console.log(error);
  }
});

//publish or unpublish a project
router.post("/publish/:projectId", async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.projectId });
    if (project.published == true) {
      project.published = false;
      console.log("false");
    } else {
      project.published = true;
      console.log("true");
    }
    await project.save();
    res
      .status(200)
      .json({ message: "publish access changed", done: true, project });
  } catch (error) {
    console.log(error);
  }
});

//fetch costbook
router.get("/costbook", async (req, res) => {
  try {
    const costbook = await CostBook.find();
    res.json({ costbook, message: "Costbook Fetched!", done: true });
  } catch (error) {
    console.log(error);
  }
});

//create costbook category
router.post("/createCostBookCategory", async (req, res) => {
  const { categoryName } = req.body;
  try {
    let CostBookCategory = await CostBook.create({
      categoryName: categoryName,
    });

    console.log(CostBookCategory);
    res
      .json({
        CostBookCategory,
        message: "cost book category created!",
        done: true,
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

//edit costbook category
router.post("/editCostBookCategory", async (req, res) => {
  const { categoryId, categoryName } = req.body;
  try {
    let category = await CostBook.findOne({ _id: categoryId });
    category.categoryName = categoryName;
    await category.save();
    res.json({ category, message: "Cost Code Created", done: true });
  } catch (error) {
    console.log(error);
  }
});

//create cost code
router.post("/createCostCode", async (req, res) => {
  const { categoryId, costCodeTitle } = req.body;
  try {
    let category = await CostBook.findOne({ _id: categoryId });
    const costcodetitle = {
      costCodeTitle: costCodeTitle,
    };
    category.costCodes.push(costcodetitle);
    await category.save();
    res.json({ category, message: "Cost Code Created", done: true });
  } catch (error) {
    console.log(error);
  }
});

//edit cost code
router.post("/editCostCode", async (req, res) => {
  const { categoryId, costCodeId, costCodeTitle, updatedCategoryId } = req.body;
  try {
    let category = await CostBook.findOne({ _id: categoryId });
    category.costCodes.map((costCode) => {
      if (costCode._id == costCodeId) {
        (costCode.costCodeTitle = costCodeTitle),
          (costCode.updatedCategoryId = updatedCategoryId);
      }
    });
    await category.save();
    res.json({ category, message: "Cost Code Created", done: true });
  } catch (error) {
    console.log(error);
  }
});

//create cost code item
router.post("/createCostCodeItem", async (req, res) => {
  const {
    categoryId,
    costCodeId,
    itemName,
    partNo,
    cost,
    itemLink,
    description,
  } = req.body;
  try {
    const category = await CostBook.findOne({ _id: categoryId });
    console.log(category);
    category.costCodes.map((costCode) => {
      if (costCode._id == costCodeId) {
        const item = {
          itemName: itemName,
          partNo: partNo,
          cost: cost,
          itemLink: itemLink,
          description: description,
        };
        costCode.items.push(item);
        console.log("cost code");
      }
    });
    await category.save();
    res.json({ message: "item created", category, done: true });
  } catch (error) {
    console.log(error);
  }
});

//edit cost code item
router.post("/editCostCodeItem", async (req, res) => {
  const {
    categoryId,
    costCodeId,
    costCodeItemId,
    itemName,
    partNo,
    cost,
    itemLink,
    description,
  } = req.body;
  try {
    const category = await CostBook.findOne({ _id: categoryId });
    console.log(category);
    category.costCodes.map((costCode) => {
      if (costCode._id == costCodeId) {
        costCode.items.map((item) => {
          if (item._id == costCodeItemId) {
            (item.itemName = itemName),
              (item.partNo = partNo),
              (item.cost = cost),
              (item.itemLink = itemLink),
              (item.description = description);
          }
        });
      }
    });
    await category.save();
    res.json({ message: "item edited", category, done: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
