const express = require("express");
const router = express.Router();
const reminderController = require("../controller/reminder_controller");
// need to import ensure authenticated
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");


router.get("/", ensureAuthenticated, reminderController.list);

router.get("/new", ensureAuthenticated, reminderController.new);

router.get("/:id", ensureAuthenticated, reminderController.listOne);

router.get("/:id/edit", ensureAuthenticated, reminderController.edit);

router.post("/", ensureAuthenticated, reminderController.create);

router.post("/update/:id", ensureAuthenticated, reminderController.update);

router.post("/delete/:id", ensureAuthenticated, reminderController.delete);


// for github
router.get("/dashboard", ensureAuthenticated, );



// dashboard.... but this should be /reminder   ??
// may have to rename some stuff
//router.get( "/dashboard", ensureAuthenticated, (req, res) => {
    // .... take me somewhere or do something
//});




module.exports = router;