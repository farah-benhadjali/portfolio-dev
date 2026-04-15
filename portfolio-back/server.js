import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// API route
app.use("/api/contact", contactRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});