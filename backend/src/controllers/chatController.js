import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        //use clerkID for stream user ID
        const token = chatClient.createToken(req.user.clerkId);
        res.status(200).json({ 
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
         });
    } catch (error) {
        console.error("Error generating Stream token:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }

};
