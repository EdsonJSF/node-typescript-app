import express, { Application } from "express";
import cors from "cors";

import db from "../db/connection";
import userRoutes from "../routes/user.routes";

class Server {
  private app: Application;
  private port: string;
  private paths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "8000";

    this.dbConnection();

    this.middlewares();

    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("DB online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at:`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

export default Server;
