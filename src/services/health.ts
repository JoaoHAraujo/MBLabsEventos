import { IHealthCheck, IHealthService } from "interfaces/health";
import { injectable } from "inversify";

@injectable()
export class HealthService implements IHealthService {
  check(): IHealthCheck {
    return {
      status: 200,
      msg: "App running",
      currentTime: new Date(),
    };
  }
}
