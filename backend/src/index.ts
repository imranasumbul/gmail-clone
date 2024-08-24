import express  from "express";
import rootRouter from "./routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const port = 500;
app.use("/api/v1", rootRouter);
app.listen(port);
