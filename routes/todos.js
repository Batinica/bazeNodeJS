import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/create", function (req, res) {
  res.write("hello world");
  res.end();
});

export default router;
