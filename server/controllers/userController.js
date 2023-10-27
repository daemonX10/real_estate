import asynceHandler from 'express-async-handler'

const createUser = asynceHandler(async (req, res) => {
    console.log("Creating a user");

    let {email} = req.body;

    console.log(email);
});


export {createUser};