export interface IHealthCheck {
    msg?: string;
    status?: number;
    currentTime?: Date;
}

export interface IHealthService {
    check(): IHealthCheck
}