import express, { Application } from "express";

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

    this.routes();
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
