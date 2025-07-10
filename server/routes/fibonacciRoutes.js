const express = require("express");
const router = express.Router();
const { getFibonacci } = require("../controllers/fibonacciController");

router.get("/fibonacci/:n", getFibonacci);

module.exports = router;