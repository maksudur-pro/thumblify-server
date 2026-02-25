import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./configs/db";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
};

startServer();
