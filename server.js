import express from "express";
const app = express();
import router from "./routes/api/notification.js";

app.use("/api/notification", router);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log("push notification server started"));
