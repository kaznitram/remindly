const database = [
    {
      id: 1,
      name: "Timmy Turner",
      email: "timmy@gmail.com",
      password: "timmy123!",
      reminders: [{id: 1, title: "timmy1", description: "stuff-t", completed: false}]
    },
    {
      id: 2,
      name: "Cosmo",
      email: "cosmo@gmail.com",  
      password: "cosmo123!",
      reminders: [{id: 1, title: "cosmo1", description: "stuff-c", completed: false}]
    },
    {
      id: 3,
      name: "Wanda",
      email: "wanda@gmail.com",
      password: "wanda123!",
      reminders: [{id: 1, title: "wanda", description: "stuff-w", completed: false}]
    },
  ];
  
  
  const userModel = {
    findOne: (email) => {
      const user = database.find((user) => user.email === email);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with email: ${email}  REFRESH`);
    },
    findById: (id) => {
      const user = database.find((user) => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}  REFRESH`);
    },
  };
  
  module.exports = { database, userModel };
  