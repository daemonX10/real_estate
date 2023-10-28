import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

const createResidency = asyncHandler(async (req, res) => {
    const { title , description , price , address, country , city, facilities , image , userEmail } = req.body.data;

    console.log(req.body.data)
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
                image,
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

export { createResidency };
