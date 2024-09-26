import express, { Application } from "express";
import userRoutes from "../routes/user";
import authRoute from "../routes/auth";
import recipeRoutes from "../routes/recipe";
import cors from "cors";

import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
    auth: "/api/auth",
    recipes: "/api/recipes",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    //definir mis rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database is online");
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors({}));
    //lectura del body
    this.app.use(express.json());
    //carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
    this.app.use(this.apiPaths.auth, authRoute);
    this.app.use(this.apiPaths.recipes, recipeRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto:  " + this.port);
    });
  }
}
export default Server;
