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

//all projects list
router.get("/all-projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ done: true, projects });
  } catch (error) {
    console.log(error);
  }
});

//create a new project
router.post("/create-project", async (req, res) => {
    const {projectName, projectStatus} = req.body
    if(!projectName || !projectStatus){
        res.status(422).json({error:" fill all the fields",done:false});
    }else{
        try {
            const project = await Project.create({projectName, projectStatus})
            res.status(200).json({message:'Project Created', done:true, project});
        } catch (error) {
            console.log(error)
        }
    }
})

//create a new task
router.post("/create-task/:projectId", async (req, res) => {
    const {taskName, taskStartDate, taskEndDate, userId} = req.body
    if(!taskName || !taskStartDate || !taskEndDate || !userId){
        res.status(422).json({error:" fill all the fields",done:false});
    }else{
        try {
            const project = await Project.findById({_id: req.params.projectId})
            const task = Task.create({taskName, taskStartDate, taskEndDate, projectOwner: userId})
            res.status(200).json({message: 'Task Created', done: true, task})
            project.tasks.push(task._id)
        } catch (error) {
            console.log(error)
        }
    }
})

//get all tasks for a project 
router.get("project/:projectId/task", async (req, res) => {
    try {
        const project = await Project.findById({_id: req.params.projectId}).tasks.populate({
            path: 'tasks'
        })
        res.status(200).json({message: 'List of tasks of the project', done: true, project})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router