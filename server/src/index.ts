import express  from "express";
import rootRouter from "./routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
app.use("/api/v1", rootRouter);
app.get("/", function(req, res){
    res.status(200).json({
        msg: `You are connected to imrana's gmail clone's backend on render `
    })
})
app.listen(port);
