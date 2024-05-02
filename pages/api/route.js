// pages/api/example.js

export default function handler(req, res) {
    if (req.method === "POST") {
        // Handle POST request
        const { body } = req;
        console.log("Received POST request with body:", body);

        // Example response
        res.status(200).json({
            message: "Received POST request successfully!",
        });
    } else {
        // Method Not Allowed
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
