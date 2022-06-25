let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  // I dno why this isn't updating =/
  // looks like values aren't changed permanently??
  update: (req, res) => 
  {
    let reminderToFind = req.params.id;
    let objIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    });

    database.cindy.reminders[objIndex].title = req.body.title;
    //console.log(database.cindy.reminders.title);  // debugging

    database.cindy.reminders[objIndex].description = req.body.description;
    //console.log(database.cindy.reminders.description);  // debugging

    database.cindy.reminders[objIndex].completed = req.body.completed;
    //console.log(database.cindy.reminders.completed);  // debugging

    //console.log(database.cindy.reminders);  // debugging

    res.redirect("/reminders");  
  },

  delete: (req, res) => 
  {
    let reminderToFind = req.params.id;
    let objIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    });

    console.log(objIndex);
    delete database.cindy.reminders[objIndex];

    res.redirect("/reminders");
  },
};

module.exports = remindersController;
