const express = require("express");
const {
  createProspect,
  getAllProspects,
  updateProspect,
  getOneProspect,
  deleteProspect,
} = require("../controllers/prospect.js");

const router = express.Router();

//add prospect
router.post("/", createProspect);

//get all prospects
router.get("/", getAllProspects);

//update prospect
router.put("/:id", updateProspect);

//get one prospect
router.get("/find/:id", getOneProspect);

//delte prospect
router.delete("/:id", deleteProspect);

module.exports = router;
