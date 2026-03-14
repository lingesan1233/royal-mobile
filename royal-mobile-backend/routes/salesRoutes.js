const router = require("express").Router();

const {
createSale,
getSales
} = require("../controllers/salesController");

router.post("/",createSale);
router.get("/",getSales);

module.exports = router;