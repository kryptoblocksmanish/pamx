import { Base } from "./Base.model";

export class MachineProfile extends Base {
    status: string;
    username: string;
    password: string;
    address: string;
    platform_id: string;
    safe: string;
}