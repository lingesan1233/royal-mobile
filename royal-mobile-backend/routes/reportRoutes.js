const router = require("express").Router();
const {downloadSalesReport} = require("../controllers/reportController");

router.get("/sales",downloadSalesReport);

module.exports = router;