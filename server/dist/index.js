"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 5000;
app.use("/api/v1", routes_1.default);
app.get("/", function (req, res) {
    res.status(200).json({
        msg: `You are connected to imrana's gmail clone's backend on render `
    });
});
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
