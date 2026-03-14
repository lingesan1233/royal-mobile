const router = require("express").Router();
const multer = require("multer");

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.post("/", upload.single("image"), addProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", upload.single("image"), updateProduct);

module.exports = router;
