const dataase = require("../model/userModel").database;
const userModel = require("../model/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {

    // debugging ********
    console.log("ger user by email and password ran! ");

    let user = userModel.findOne(email);
    if (user)
    {
        if (isUserValid(user, password))
        {
            return user;
        }
    }
    return null;
};



const getUserById = (id) => {
    let user = userModel.findById(id);
    if (user)
    {
        return user;
    }
    return null;
};


// check if the passwords match
function isUserValid(user, password)
{
    return (user.password === password);
}


module.exports = {
    getUserByEmailIdAndPassword,
    getUserById
};