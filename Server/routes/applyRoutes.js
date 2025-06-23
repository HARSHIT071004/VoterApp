const express = require('express');
const router = express.Router();
const multer = require('multer');
const Application = require('../models/applicationmodel');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });


router.post(
  '/apply',
  upload.fields([
    { name: 'aadharCard' },
    { name: 'panCard' },
    { name: 'voterId' },
    { name: 'drivingLic' },
    { name: 'hscMarksheet' },
    { name: 'gradMarksheet' },
    { name: 'postGradMarksheet' },
  ]),
  async (req, res) => {
    try {
      const files = req.files;
      const body = req.body;

      const newApp = new Application({
        ...body,
        aadharCard: files?.aadharCard?.[0]?.filename || '',
        panCard: files?.panCard?.[0]?.filename || '',
        voterId: files?.voterId?.[0]?.filename || '',
        drivingLic: files?.drivingLic?.[0]?.filename || '',
        hscMarksheet: files?.hscMarksheet?.[0]?.filename || '',
        gradMarksheet: files?.gradMarksheet?.[0]?.filename || '',
        postGradMarksheet: files?.postGradMarksheet?.[0]?.filename || '',
      });

      await newApp.save();
      res.status(201).json({ message: 'Application saved' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error saving application' });
    }
  }
);

module.exports = router;
