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
const Step = mongoose.model("Step")

//USER_ID: "6034cb2baed4be0890904a06"
//PROJECT_ID: "6034cceed06e2a4938562970"
//TASK_ID: 6034cd87d06e2a4938562971

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
        res.status(422).json({error:" Fill all the fields",done:false});
    }else{
        try {
            const project =  await Project.create({projectName, projectStatus})
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
            const project = await Project.findOne({_id: req.params.projectId})
            console.log(project)
            const task = await Task.create({taskName, taskStartDate, taskEndDate, taskOwner: userId})
            res.status(200).json({message: 'Task Created', done: true, task})
            console.log(task._id)
            project.tasks.push(task._id)
            project.save(function(err){
                if(err){
                    console.log(err)
                    return
                }else{
                    console.log("task added to project")
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
})

//get all tasks for a project 
router.get("/project/:projectId/task", async (req, res) => {
    try {
        let tasks = await Project.findOne({_id: req.params.projectId}).populate({
            path: 'tasks'
        }).select('tasks')
        
        res.status(200).json({message: 'List of tasks of the project', done: true, tasks})
    } catch (error) {
        console.log(error)
    }
})

//create a step
router.post("/create-step/:taskId", async (req, res) => {
    const {stepName} = req.body
    if(!stepName){
        res.status(422).json({error:" fill all the fields",done:false})
    }else{
    try {
        const task = await Task.findOne({_id: req.params.taskId})
        const step = await Step.create({stepName})
        res.status(200).json({done: true, message: "Step for the task created", step})
        task.steps.push(step._id)
        task.save(function(err){
            if(err){
                console.log(err)
                return
            }else{
                console.log("Step related to task")
            }
        })
    } catch (error) {
        console.log(error)
    }
}
})

//get steps for a task
router.get("/task/:taskId/step", async (req, res) => {
    try {
        let steps = await Task.findOne({_id: req.params.taskId}).populate({
            path: 'steps'
        }).select('steps')
        res.status(200).json({message: "All the steps related to task", done: true, steps})
    } catch (error) {
        console.log(error)
    }
})

//creating a purchase order
router.post("/create-purchase-order/:taskId", async (req, res) => {
    const {orderFrom, totalOrderAmount, totalPaidAmount, userId, projectId} = req.body
    if(!orderFrom || !totalOrderAmount ||!totalPaidAmount || !userId || !projectId){
        res.status(422).json({error:"Fill all the fields",done:false})
    }else{
        try {
            let task = await Task.findOne({_id: req.params.taskId})
            let project = await Project.find({_id: projectId})
            let purchaseOrder = await PurchaseOrder.create({orderFrom, totalOrderAmount, totalPaidAmount, user: userId})
            task.purchaseOrders.push(purchaseOrder._id)
            project.purchaseOrders.push(purchaseOrder._id)
            task.save(function(err){
                if(err){
                    console.log(err)
                    return
                }
            })
            res.status(200).json({message: 'Purchase order created and linked to the task', done: true, purchaseOrder})
        } catch (error) {
            console.log(error)
        }
    }
})

//geting the purchase order for a task
router.get("/task/:taskId/purchaseOrder", async (req, res) => {
    try {
        const purchaseOrders = await Task.find({_id: req.params.taskId}).populate({
            path: 'purchaseOrders'
        }).select('purchaseOrders')
        res.status(200).json({message: 'All purchase orders linked to the task', done: true, purchaseOrders})
    } catch (error) {
        console.log(error)
    }
})

//getting puchase orders for a project
router.get("/project/:projectId/purchaseOrders", async (req, res) => {
    try {
        const purchaseOrder = await Project.findOne({_id: req.params.projectId}).populate({
            path: 'purchaseOrders'
        }).select('purchaseOrders')
        res.status(200).json({message: 'All purchase orders linked to the project', done: true, purchaseOrder})
    } catch (error) {
        console.log(error)
    }
})

//creating purchase order items
router.post("/creating-purchase-order-items/:purchaseOrderId", async (req, res) => {
    const {itemName, itemNumber, itemsShipped, itemValue} = req.body
    if(!itemName || !itemNumber || !itemsShipped || !itemValue){
        res.status(422).json({error:"Fill all the fields",done:false})
    }else{
        try {
            let purchaseOrder = await PurchaseOrder.findOne({_id: req.params.purchaseOrderId})
            let purchaseOrderItem = await PurchaseOrderItem.create({itemName, itemNumber, itemsShipped, itemValue})
            purchaseOrder.purchasedItems.push(purchaseOrderItem._id)
            purchaseOrder.save(function(err){
                if(err){
                    console.log(err)
                    return
                }
            })
            res.status(200).json({message: 'Purchase order items created and linked to the order', done: true, purchaseOrderItem})    
        } catch (error) {
            console.log(error)
        }
    }
})



module.exports = router