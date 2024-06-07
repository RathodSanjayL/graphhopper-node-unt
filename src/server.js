import cluster from "cluster";
import { cpus } from "os";

import { config } from "dotenv";

import { app } from "./app.js";

config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const ENV = process.env.NODE_ENV;

if (ENV === "development") {
  app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
  });
}

if (ENV === "production") {
  const numCpus = cpus().length;

  if (cluster.isPrimary) {
    console.log(`Master thread is running on ${process.pid}`);
    for (let i = 0; i < numCpus; i++) {
      cluster.fork();
    }

    cluster.on("exit", () => {
      cluster.fork();
    });
  } else {
    app.listen(PORT, () => {
      console.log(`server is running on ${process.pid}`);
    });
  }
}
