import express from "express";

import middleware from "./middleware";
import MongoDb from "../lib/database/mongodb";
import { PORT } from "./config";

// app is initialized
const app = express();

// all the middleware are defined here
middleware(app);

// server is started
app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
