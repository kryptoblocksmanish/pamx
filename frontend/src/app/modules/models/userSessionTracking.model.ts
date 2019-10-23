export class UserSessionTracking {
    session_id: string;
    browser: string;
    login_name: string;
    password: string;
    login_time: string = "0";
    logout_time: string = "0";
    page_accessed_name: string;
    page_accessed_time: string;
    source_ip_address: string;
    clean_logged_out_flag: boolean = false;
    status_code: string = "200";
    remarks: string;
}