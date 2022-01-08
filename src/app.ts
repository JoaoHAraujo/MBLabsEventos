import "reflect-metadata";
import express from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import './controllers/health'
import { IHealthService } from "./interfaces/health";
import { HealthService } from "./services/health";
import { TYPES } from "./types";


class App {
  private container: Container;
  public server: InversifyExpressServer;

  constructor() {
    this.container = new Container();
    this.container.bind<IHealthService>(TYPES.HealthService).to(HealthService)

    this.configbuildServer(this.container);
  }

  configbuildServer(container: Container): void {
    this.server = new InversifyExpressServer(container, null, {
      rootPath: "/api/v1",
    });

    this.server.setConfig((app) => {
      app.use(express.json());
    });
  }
}

export default new App().server.build();
