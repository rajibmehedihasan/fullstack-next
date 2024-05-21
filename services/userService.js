// services/userService.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data) => {
    try {
        return await prisma.user.create({
            data,
        });
    } catch (error) {
        throw new Error("Failed to create user");
    }
};

export const getUsers = async () => {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        throw new Error("Failed to retrieve users");
    }
};

export const updateUser = async (id, data) => {
    try {
        return await prisma.user.update({
            where: { id: parseInt(id, 10) },
            data,
        });
    } catch (error) {
        throw new Error(`Failed to update user with id: ${id}`);
    }
};

export const deleteUser = async (id) => {
    try {
        return await prisma.user.delete({
            where: { id: parseInt(id, 10) },
        });
    } catch (error) {
        throw new Error(`Failed to delete user with id: ${id}`);
    }
};
