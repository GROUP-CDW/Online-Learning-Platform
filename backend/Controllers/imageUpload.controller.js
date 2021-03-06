// const express = require("express");
// const app = express();
const path = require("path");
const fs = require("fs");
// //middleware
// app.use(express.json());

const multer = require("multer");

const imageUploadController = (exports.imageUploadController = {});

var destination = "images/";
const imageStorage = multer.diskStorage({
  // Destination to store image req.user.id + 
  destination: (req, file, cb) => {
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    console.log("file");
    console.log(file);
    cb(null, file.originalname);
  },
});

imageUploadController.imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 100000000,
  },
  fileFilter(req, file, cb) {
    console.log("file");
    if (!file.originalname.match(/\.(png|jpg|JPG|PDF|pdf|mp4|webm)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
}).single("image");

// imageUploadController.imageUpload = async function (req, res, next) {
//   //   var destination = req.user.email + "images";
//   var destination = "images" + "images";
//   const imageStorage = multer.diskStorage({
//     // Destination to store image
//     destination: (req, file, cb) => {
//       cb(null, destination);
//     },
//     filename: (req, file, cb) => {
//       console.log("file");
//       console.log(file);
//       cb(null, file.originalname);
//     },
//   });

//   const imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//       fileSize: 10000000,
//     },
//     fileFilter(req, file, cb) {
//       console.log("file");
//       if (!file.originalname.match(/\.(png|jpg|JPG|PDF|pdf)$/)) {
//         // upload only png and jpg format
//         return cb(new Error("Please upload a Image"));
//       }
//       cb(undefined, true);
//     },
//   });

//   imageUpload.single("image");
//   next();
// };
