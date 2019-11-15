import { BaseModel } from "../Base.model";

/**
 * This class keeps holding the current password scenario
 */
export class PasswordObj extends BaseModel {
    user_uid: string; // user id for which this password obj is generated
    machine_uid: string;//machine id for which password needs to be updated
    original_password: string;
    last_password: string;//last changed password
    new_password: string;//new changed password
    new_password_update_time: string;
    remarks: string;    
}
