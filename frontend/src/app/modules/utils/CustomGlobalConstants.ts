/**
 * All constants used in the application will go in this class file
 */
import { environment } from "../../../environments/environment";

export class CustomGlobalConstants {

    //read from environment file
    static readonly SERVER_URL = environment.SERVER_URL;

    static readonly SECRET_KEY = "KRYPTO_SECRET";

    //company categories constants
    static readonly COMPANY_CATEGORY_CORPORATE_COMPANY = "CC";

    //Global Keys 
    static readonly KEY_TOKEN = "token";
    static readonly KEY_USER_ID = "user_id";

    //Database user type
    static readonly VENDOR_USER = "Vendor";
    static readonly CUSTOMER_USER = "Customer";

    //User type
    static readonly USER_ROLE_VENDOR = "vendor";
    static readonly USER_ROLE_CUSTOMER = "customer";

    //CRUD OPERATION CONSTANTS
    static readonly CRUD_CREATE = "c";
    static readonly CRUD_READ = "r";
    static readonly CRUD_UPDATE = "u";
    static readonly CRUD_DELETE = "d";

    //incentive types - should be same in server side
    static readonly INCENTIVE_TYPE_COUPON = "coupon"; //
    static readonly INCENTIVE_TYPE_REWARD = "reward";

    //categories
    static readonly INCENTIVE_CATEGORY_GENERAL = "GENERAL";
    static readonly INCENTIVE_SUB_CATEGORY_GENERAL = "sub cat 1";

    //discount types
    static readonly DISCOUNT_TYPE_DISCOUNT = "discount";
    static readonly DISCOUNT_TYPE_PRICE_SLASH = "price";


    //params constants
    static readonly PARAM_ID = "id";
    static readonly PARAM_INCENTIVE_TYPE = "incentiveType";
    static readonly PARAM_CRUD_TYPE = "crudType";

    //constants (Html display)
    static readonly CONSTANT_COUPON = "Coupon";
    static readonly CONSTANT_REWARD = "Reward";

    static readonly CONSTANT_CREATE = "Create";
    static readonly CONSTANT_READ = "Read";
    static readonly CONSTANT_UPDATE = "Update";
    static readonly CONSTANT_DELETE = "Delete";

    //html pick list constants
    static readonly PICKLIST_REWARDS_SEARCH: Array<string> = ['All', 'Active', 'Inactive', 'Expired', 'Deleted'];
    static readonly PICKLIST_COUPONS_SEARCH: Array<string> = ['All', 'Active', 'Inactive', 'Expired', 'Deleted'];
    static readonly PICKLIST_INCENTIVES_CATEGORY: Array<string> = ['GAMING', 'BANKS', 'AIRLINES', 'SALOONS', 'CAFFE',
        'GROCERIES', 'FOOD', 'HOTEL', 'HEALTH and FITNESS', 'RETAIL', 'SERVICES'];
    static readonly PICKLIST_INCENTIVES_SUB_CATEGORY: Array<string> = ['sub cat 1', 'sub cat 2', 'sub cat 3', 'sub cat 4'];
    static readonly PICKLIST_DISCOUNT_TYPE: Array<string> = ['Discount', 'Price Cut'];
    static readonly PICKLIST_PRIMARY_INCENTIVES_SEARCH: Array<string> = ['All', 'Normal', 'Batch'];

    //some default constants
    static readonly DEFAULT_INCENTIVE_IMAGE_FILE_LINK = "../../../assets/img/free_dinner.jpg";
    static readonly DEFAULT_IMAGE_FILE_LINK = "../../../assets/img/thumb_img_file.png";
    static readonly DEFAULT_PROFILE_IMAGE_FILE_LINK = "../../assets/img/thumb_img_file.png";

    //route navigation constants (as per app.module.ts)
    static readonly ROUTE_COUPON = "/incentives/coupon";
    static readonly ROUTE_REWARD = "/incentives/reward";
    static readonly ROUTE_PROFILE = "/my-profile";
    static readonly ROUTE_DASHBOARD = "ourdashboard";

    //default file names to download
    static readonly REWARD_DEFAULT_FILE_NAME_FOR_DOWNLOAD = "rewards.csv";
    static readonly COUPON_DEFAULT_FILE_NAME_FOR_DOWNLOAD = "coupons.csv";

    //picklist constants in database
    static readonly PICKLIST_PRODUCT_CATEGORY_TYPE = "product_category";
    static readonly PICKLIST_PRODUCT_CATEGORY_VALUE = "Product Category";
    static readonly PICKLIST_PRODUCT_SUB_CATEGORY_TYPE = "product_sub_category";
    static readonly PICKLIST_PRODUCT_SUB_CATEGORY_VALUE = "Product Sub Category";
    static readonly PICKLIST_PRODUCT_UNITS_OF_PURCHASE_TYPE = "product_units_of_purchase";
    static readonly PICKLIST_PRODUCT_UNITS_OF_PURCHASE_VALUE = "Product Units Of Purchase";
    static readonly PICKLIST_PRODUCT_UOP_VARIANCE_TYPE = "product_uop_variance";
    static readonly PICKLIST_PRODUCT_UOP_VARIANCE_VALUE = "Product UOP Variance";
    static readonly PICKLIST_PRODUCT_PRICE_OF_PURCHASE_CATEGORY_TYPE = "product_price_of_purchase_category";
    static readonly PICKLIST_PRODUCT_PRICE_OF_PURCHASE_CATEGORY_VALUE = "Product Price Of Purchase Category";
    static readonly PICKLIST_INCENTIVE_CUSTOMER_VALUE_TYPE = "incentive_customer_value";
    static readonly PICKLIST_INCENTIVE_CUSTOMER_VALUE_VALUE = "Incentive Customer Value";
    static readonly PICKLIST_INCENTIVE_CLTV_STATUS_TYPE = "incentive_cltv_status";
    static readonly PICKLIST_INCENTIVE_CLTV_STATUS_VALUE = "Incentive Cltv Status";
    static readonly PICKLIST_COMPANY_REGION_TYPE = "company_region";
    static readonly PICKLIST_COMPANY_REGION_VALUE = "Company Region";
    static readonly PICKLIST_PRODUCT_BRAND_TYPE = "product_brand";
    static readonly PICKLIST_PRODUCT_BRAND_VALUE = "Product Brand";

    //configurable picklist
    static readonly DEFAULT_PICKLIST_ARR = [
        CustomGlobalConstants.PICKLIST_PRODUCT_CATEGORY_TYPE,
        CustomGlobalConstants.PICKLIST_PRODUCT_SUB_CATEGORY_TYPE,
        CustomGlobalConstants.PICKLIST_PRODUCT_UNITS_OF_PURCHASE_TYPE,
        CustomGlobalConstants.PICKLIST_PRODUCT_UOP_VARIANCE_TYPE,
        CustomGlobalConstants.PICKLIST_PRODUCT_PRICE_OF_PURCHASE_CATEGORY_TYPE,
        CustomGlobalConstants.PICKLIST_INCENTIVE_CUSTOMER_VALUE_TYPE,
        CustomGlobalConstants.PICKLIST_INCENTIVE_CLTV_STATUS_TYPE,
        CustomGlobalConstants.PICKLIST_COMPANY_REGION_TYPE,
        CustomGlobalConstants.PICKLIST_PRODUCT_BRAND_TYPE
    ]

    //element defaults UUID - parent
    static readonly ELEM_INCENTIVE_CUSTOMER_VALUE_EXTENDED_WARRANTY = "ELEM_INCENTIVE_CUSTOMER_VALUE_EXTENDED_WARRANTY";
    static readonly ELEM_PROD_UOP_QTY = "ELEM_PROD_UOP_QTY";
    static readonly ELEM_INCENTIVE_CUSTOMER_VALUE_CREDIT_CARD = "ELEM_INCENTIVE_CUSTOMER_VALUE_CREDIT_CARD";


    //Any
    static readonly ALL = "all";

    //unique auth token
    static UNIQUE_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTY0MTM1MDI2fQ.9MuDCbybTjzT__uNOhqdrfsF1B41UHUxTvMW2tA7C9I";

    //common table options
    static COMMON_TABLE_OPTIONS = "table table-sm table-bordered table-hover";

    constructor() {
    }
}