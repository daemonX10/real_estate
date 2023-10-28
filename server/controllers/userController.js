import {prisma} from '../config/prismaConfig.js';
import asynceHandler from 'express-async-handler'

const createUser = asynceHandler(async (req, res) => {
    console.log("Creating a user");

    let {email} = req.body;

    const userExists = await prisma.user.findUnique({
        where:{email:email}
    })

    if (!userExists) {
        const user = await prisma.user.create({
            data: req.body,
        });
        res.send({
            message: "User created successfully",
            user: user,
        });
    }
    else {
        res.status(201).send({
            message: "User already exists",
        });
    }
});


export {createUser};