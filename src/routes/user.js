const express = require("express");

const router = express.Router();

const app = express();

const { create } = require("../controllers/user");
const { projectController } = require("../controllers/projectController");

router.post('/create/user', create );
router.post('/controllers/user', create );
router.post('/controllers/projectController', projectController);


module.exports = router;

