import express from "express";
import http from "http";
import "dotenv/config";
import cors from "cors";
import { join } from "path";

import mailSubscriber from "./redis/subscribers/mailSubscriber";

//import db connection
import dbConnect from "./db/db";
//import error controller and routes
import { get404, handleError } from "./controllers/errors";
import auth from "./routes/auth";
import account from "./routes/account";
import tasks from "./routes/tasks";

// import middlewares
import tokenVerify from "./middleware/tokenVerify";

// import sockets
import runTaskSocket from "./sockets/taskSocket";

const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, "build")));

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res, next) => {
  res.status(200).sendFile(join(__dirname, "build", "index.html"));
});

app.use("/api/auth", auth);

app.use("/api", tokenVerify);
app.use("/api/account", account);
app.use("/api/tasks", tasks);

// listening to mails queue
mailSubscriber();

app.use(get404);
app.use(handleError);

runTaskSocket(httpServer);

const port = process.env.PORT || 3007;
httpServer.listen(port, async () => {
  await dbConnect();
  console.log(`@@@ server is running on http://localhost:${port}`);
});
