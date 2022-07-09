const express = require("express");
const router = express.Router();
const reminderController = require("../controller/reminder_controller");
// need to import ensure authenticated
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

// ensureAuthenticated
router.get("/", ensureAuthenticated, reminderController.list);

// ensureAuthenticated
router.get("/new", ensureAuthenticated, reminderController.new);

// ensureAuthenticated
router.get("/:id", ensureAuthenticated, reminderController.listOne);

// ensureAuthenticated
router.get("/:id/edit", ensureAuthenticated, reminderController.edit);

// ensureAuthenticated
router.post("/", ensureAuthenticated, reminderController.create);

// Implement this yourself
// ensureAuthenticated
router.post("/update/:id", ensureAuthenticated, reminderController.update);

// Implement this yourself
// ensureAuthenticated
router.post("/delete/:id", ensureAuthenticated, reminderController.delete);



// dashboard.... but this should be /reminder   ??
// may have to rename some stuff
//router.get( "/dashboard", ensureAuthenticated, (req, res) => {
    // .... take me somewhere or do something
//});




module.exports = router;