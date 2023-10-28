import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

const createResidency = asyncHandler(async (req, res) => {
    const { title , description , price , address, country , city, facilities , images , userEmail } = req.body.data;

    const user = await prisma.user.findUnique({where:{email:userEmail}});

    if(!user){
        res.status(400).send("User not found")
    }

    try {
        const residency = await prisma.residency.create({ 
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                images,
                owner : {connect : {email:userEmail}}
            }
        });
        res.send({ message: "Residency created successfully", residency });
    } catch (error) {
        if(error.code=== "P2002"){
            res.status(400)
            throw new Error("Residency already exists")
        }
        throw new Error(error.message)
    }
});

const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc"
        },
    });
    res.send(residencies);
})

// to get specific residency

const getResidency = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const residency = await prisma.residency.findUnique({where:{id}});
        res.send(residency);
    } catch (error) {
        throw new Error(error.message)
    }
});


export { createResidency, getAllResidencies,getResidency };
