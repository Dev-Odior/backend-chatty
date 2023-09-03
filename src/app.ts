import express, { Express } from "express";
import { ChattyServer } from "./setupserver";
import databaseConnection from "./setUpDatabase";
import { config } from "./config";

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
