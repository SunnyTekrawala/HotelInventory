import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment"

export const APP_SERVIVE_CONFIG = new InjectionToken<AppConfig>('app.config');
export const app_config: AppConfig = {
    apiEndpoint: environment.apiEndpoint
}