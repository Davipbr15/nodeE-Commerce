const express = require("express");

const router = express.Router();

const app = express();

const { create } = require("../controllers/user");

router.post('/create/user', create );
require("../controllers/projectController")(app);


module.exports = router;

