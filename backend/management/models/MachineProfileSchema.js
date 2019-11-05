const mongoose = require("mongoose");

const MachineProfileSchema = mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    status: { type: String },
    username: { type: String },
    password: { type: String },
    address: { type: String },
    platform_id: { type: String },
    safe: { type: String }
});
module.exports = mongoose.model('MachineProfile', MachineProfileSchema, 'machine_profiles');