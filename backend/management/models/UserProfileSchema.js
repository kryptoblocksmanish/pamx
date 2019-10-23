const mongoose = require("mongoose");
let Utils = require('../utils/Utils');

const UserProfileSchema = mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    login_name: { type: String },
    password: { type: String },
    email: { type: String },
    salutation: { type: String, default: "" },
    first_name: { type: String, default: "" },
    middle_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    full_name: { type: String, default: "" },
    facebook_id: { type: String, default: "" },
    google_id: { type: String, default: "" },
    phone: { type: Number, default: "" },
    date_of_birth: { type: String, default: "" },
    profile_link: { type: String, default: "" },
    created_on: { type: Number, required: true, default: Utils.getCurrentUTCTimestamp() },
    last_modified: { type: Number, required: true, default: Utils.getCurrentUTCTimestamp() },
    has_completed_profile: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    last_login_time: { type: Number }
});
module.exports = mongoose.model('UserProfile', UserProfileSchema, 'user_profiles');