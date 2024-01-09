import express from "express";
const app = express();
import { config } from "dotenv";
config();
//middlewares
//connections and listeners
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Listening at port " + PORT);
});
//# sourceMappingURL=index.js.map