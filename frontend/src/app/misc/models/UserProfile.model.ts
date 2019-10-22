import { Base } from "./Base.model";

export class UserProfile extends Base {
    uuid: string;
    login_name: string;
    password: string;
    email: string;
    salutation: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    full_name: string;
    facebook_id: string;
    google_id: string;
    phone: number;
    date_of_birth: string;
    profile_link: string;
    created_on: number;
    last_modified: number;
    is_active: boolean;
    last_login_time: number;
}