let express = require('express');
let router = express.Router();
let logger = require('../libs/Logger');
let response = require('../libs/Response');
let MachineProfile = require('../models/MachineProfileSchema');
let Utils = require('../utils/Utils');

router.get("/getAllMachineProfiles", async function (req, res) {
    logger.logString("Enter: getAllMachineProfiles");
    logger.logObj(req.params);
    try {
        let result = await MachineProfile.find();
        response.success(req, res, "Success getAllMachineProfiles", result);
    } catch (error) {
        logger.logErrorStringWithObj("Error in getAllMachineProfiles", error.message);
        response.serverError(req, res, "Error in getAllMachineProfiles", error);
    }
});

router.post("/addMachineProfile", async function (req, res) {
    logger.logString("Enter: addMachineProfile");
    try {
        logger.logObj(req.params);
        logger.logObj(req.body);
        let machineProfile = new MachineProfile(req.body);
        //first check if the user exists
        let result = await MachineProfile.findOne({
            'username': machineProfile.username
        });
        logger.logStringWithObj("addMachineProfile result", result);
        if (result != null) {
            throw new Error('Machine Profile Already Exists');
        }
        //set uid for user
        machineProfile.uid = await Utils.smallUID();
        logger.logStringWithObj("addMachineProfile new uid", machineProfile.uid);
        result = await machineProfile.save();
        logger.logStringWithObj("save MachineProfile result", result);
        response.success(req, res, "Success addMachineProfile", result);

    } catch (error) {
        logger.logErrorStringWithObj("Error in addMachineProfile", error.message);
        response.serverError(req, res, "Error in addMachineProfile", error.message);
    }
});

//////////
module.exports = router;