import { BaseModel } from "./Base.model";

export class MachineProfile extends BaseModel {
    status: string;
    username: string;
    password: string;
    address: string;
    platform_id: string;
    safe: string;
}