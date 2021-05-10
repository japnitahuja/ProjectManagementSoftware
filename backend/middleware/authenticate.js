const express = require("express"); 
const mongoose = require("mongoose");
require('../models/user')
const User = mongoose.model('User')
const jwt = require("jsonwebtoken");

//require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be loggedIn ", done: false });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, jwt_secret, async (err, payload) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "you must be loggedIn", done: false });
    }
    const { _id } = payload;
    const user = await User.findById(_id).select("-password");
    req.user = user;
    next();
  });
};
