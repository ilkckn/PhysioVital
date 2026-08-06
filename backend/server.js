import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import appointmentRoutes from "./routes/appointments.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("PhysioVital backend is working!")
});

app.use("/appointments", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})