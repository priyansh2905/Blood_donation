const Prospect = require("../models/Prospect");

const createProspect = async (req, res) => {
  try {
    const newProspect = Donor(req.body);
    const prospect = await newProspect.save();
    res.status(201).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all prospects

const getAllProspects = async (req, res) => {
  try {
    const prospect = await Prospect.find().sort({ createdAt: -1 });
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update the prospect

const updateProspect = async (req, res) => {
  try {
    const updateProspect = await Prospect.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateProspect);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get one Prospec

const getOneProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete prospect

const deleteProspect = async (req, res) => {
  try {
    await Prospect.findByIdAndDelete(req.params.id);
    res.status(201).json("Prospect deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  deleteProspect,
  getOneProspect,
  getAllProspects,
  updateProspect,
  createProspect,
};
