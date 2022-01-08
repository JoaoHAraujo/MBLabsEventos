import express from "express";
import {
    controller,
    httpGet,
    interfaces,
    response,
} from "inversify-express-utils";
import { inject } from "inversify";

import { TYPES } from "../types";
import { IHealthService } from "../interfaces/health";

@controller("/health")
export class HealthController implements interfaces.Controller {
  constructor(
    @inject(TYPES.HealthService)
    private healthService: IHealthService
  ) {}

  @httpGet("/")
  check(@response() res: express.Response) {
    const healthCheck = this.healthService.check();
    return res.status(200).json(healthCheck);
  }
}
