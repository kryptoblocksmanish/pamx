import { CustomGlobalConstants } from "../utils/CustomGlobalConstants";

export class BaseServiceConfig {
    PASSWORD_HOST = "";
    HOST_URL = CustomGlobalConstants.SERVER_URL;
    USER_PROFILES_HOST_URL = this.HOST_URL + "/users";
    MACHINE_PROFILES_HOST_URL = this.HOST_URL + "/machines";
    NETWORK_HOST_URL = this.HOST_URL + "/network";
}