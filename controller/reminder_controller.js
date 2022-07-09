//let database = require("../database");
const database = require("../model/userModel").database; // ?????
const userModel = require("../model/userModel").userModel;  // ????

// cindy is hardcoded in all these object functions

// list of reminders page
// ----------------------
let remindersController = {
  list: (req, res) => {
    //res.render("reminder/index", { reminders: database.cindy.reminders });
    const userId = req.userId;

    /*
    const getUser = database.find((user) => {
      return user.id == userId;
    });
    */

    res.render("reminder/index", {
      user: req.user,
      reminders: req.user.reminders
    });
  },


  // new page:  (GET)
  // ---------
  new: (req, res) => {
    res.render("reminder/create");
  },


  // view single reminder  (GET)
  //---------------------
  listOne: (req, res) => {
    let reminderToFind = req.params.id; // passed id via url

    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });


/*
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
*/

    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", {
        user: req.user,
        reminders: req.user.reminders
      });
    }
  },

  // create   (POST)
  // -------
  create: (req, res) => {
    const userID = req.user.id;

    let lastElementID = req.user.reminders.length;
    let newId;
    if (lastElementID === 0)
    {
      newId = 1;
    }
    {
    newId = (lastElementID + 1);
    }

    const newReminder = {
      id: newId,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };

    req.user.reminders.push(newReminder);
    res.redirect("/reminder");
    },


  // edit  (GET)
  // ----
  edit: (req, res) => {
    let reminderToFind = req.params.id; // passed id via url

    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    res.render("reminder/edit", { reminderItem: searchResult });
  },


  // Update:  (POST)
  // --------------
  update: (req, res) => 
  {
    let reminderToFind = req.params.id;
    let objIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind; 
    });

    req.user.reminders[objIndex].title = req.body.title;
    req.user.reminders[objIndex].description = req.body.description;
    req.user.reminders[objIndex].completed = req.body.completed;
    // ************ COMPLETED bool isn't saving. debug this later when more freetime. probs an html thing *********

    res.redirect("/reminder");  
  },


  // Delete:   (POST)
  // ----------------
  delete: (req, res) => 
  {
    let reminderToFind = req.params.id;
    let objIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    });


    //delete req.user.reminders[objIndex];  // doesn't re index array
    req.user.reminders.splice(objIndex,1);  // nice. this fixed it

    res.redirect("/reminder");
  },
};

module.exports = remindersController;
