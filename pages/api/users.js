// /*
//  * Title: Users operations
//  * Description: CRUD operations for users
//  * Author: Mehedi Hasan
//  * Date: 2024-05-20
//  *
//  */

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const users = {
//     create: async (req, res) => {
//         try {
//             const user = await prisma.user.create({
//                 data: req.body,
//             });
//             res.status(201).json(user);
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         } finally {
//             await prisma.$disconnect();
//         }
//     },
//     read: async (req, res) => {
//         try {
//             const users = await prisma.user.findMany();
//             res.status(200).json(users);
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         } finally {
//             await prisma.$disconnect();
//         }
//     },
//     update: async (req, res) => {
//         try {
//             const user = await prisma.user.update({
//                 where: { id: req.params.id },
//                 data: req.body,
//             });
//             res.status(200).json(user);
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         } finally {
//             await prisma.$disconnect();
//         }
//     },
//     delete: async (req, res) => {
//         try {
//             const user = await prisma.user.delete({
//                 where: { id: req.params.id },
//             });
//             res.status(200).json(user);
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         } finally {
//             await prisma.$disconnect();
//         }
//     },
// };

// export default users;

// // export default async function handler(req, res) {
// //     try {
// //         const users = await prisma.user.findMany();
// //         res.status(200).json(users);
// //     } catch (error) {
// //         console.error("Error:", error);
// //         res.status(500).json({ error: "Internal Server Error" });
// //     } finally {
// //         await prisma.$disconnect();
// //     }
// // }

// /*
//  * Title: Users operations
//  * Description: CRUD operations for users
//  * Author: Mehedi Hasan
//  * Date: 2024-05-20
//  */

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const handler = async (req, res) => {
//     const { method } = req;

//     switch (method) {
//         case "POST":
//             try {
//                 const user = await prisma.user.create({
//                     data: req.body,
//                 });
//                 res.status(201).json(user);
//             } catch (error) {
//                 console.error("Error:", error);
//                 res.status(500).json({ error: "Internal Server Error" });
//             } finally {
//                 await prisma.$disconnect();
//             }
//             break;
//         case "GET":
//             try {
//                 const users = await prisma.user.findMany();
//                 res.status(200).json(users);
//             } catch (error) {
//                 console.error("Error:", error);
//                 res.status(500).json({ error: "Internal Server Error" });
//             } finally {
//                 await prisma.$disconnect();
//             }
//             break;
//         case "PUT":
//             try {
//                 const { id } = req.query;
//                 const user = await prisma.user.update({
//                     where: { id: parseInt(id, 10) },
//                     data: req.body,
//                 });
//                 res.status(200).json(user);
//             } catch (error) {
//                 console.error("Error:", error);
//                 res.status(500).json({ error: "Internal Server Error" });
//             } finally {
//                 await prisma.$disconnect();
//             }
//             break;
//         case "DELETE":
//             try {
//                 const { id } = req.query;
//                 const user = await prisma.user.delete({
//                     where: { id: parseInt(id, 10) },
//                 });
//                 res.status(200).json(user);
//             } catch (error) {
//                 console.error("Error:", error);
//                 res.status(500).json({ error: "Internal Server Error" });
//             } finally {
//                 await prisma.$disconnect();
//             }
//             break;
//         default:
//             res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
//             res.status(405).end(`Method ${method} Not Allowed`);
//             break;
//     }
// };

// export default handler;

// pages/api/users.js
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} from "../../services/userService";

const handler = async (req, res) => {
    const { method } = req;

    try {
        switch (method) {
            case "POST":
                try {
                    const newUser = await createUser(req.body);
                    res.status(201).json(newUser);
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
                break;
            case "GET":
                try {
                    const allUsers = await getUsers();
                    res.status(200).json(allUsers);
                } catch (error) {
                    res.status(500).json({ error: error.message });
                }
                break;
            case "PUT":
                try {
                    const { id } = req.query;
                    const updatedUser = await updateUser(id, req.body);
                    res.status(200).json(updatedUser);
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
                break;
            case "DELETE":
                try {
                    const { id } = req.query;
                    const deletedUser = await deleteUser(id);
                    res.status(200).json(deletedUser);
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
                break;
            default:
                res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default handler;
