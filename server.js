import dotenv from "dotenv";
import { app } from "./src/app.js";
import { connectDb } from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening from port ${PORT}`);
  connectDb();
});