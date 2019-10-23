let express = require('express');
let router = express.Router();
let logger = require('../libs/Logger');
let response = require('../libs/Response');
let UserProfile = require('../models/UserProfileSchema');
let Utils = require('../utils/Utils');

router.get("/getAllUserProfiles", async function (req, res) {
    logger.logString("Enter: getAllUserProfiles");
    logger.logObj(req.params);
    try {
        // let userProfile = await UserProfile.findById(req.params.user_uid);
        // let userProfile = await UserProfile.findOne({ 'uid': req.params.user_uid });
        let result = await UserProfile.find();
        response.success(req, res, "Success getAllUserProfiles", result);
    } catch (error) {
        logger.logErrorStringWithObj("Error in getAllUserProfiles", error.message);
        response.serverError(req, res, "Error in getAllUserProfiles", error);
    }
});

router.post("/addUserProfile", async function (req, res) {
    logger.logString("Enter: addUserProfile");
    try {
        logger.logObj(req.params);
        logger.logObj(req.body);
        let userProfile = new UserProfile(req.body);
        //first check if the user exists
        let result = await UserProfile.findOne({
            'login_name': userProfile.login_name,
            'password': userProfile.password
        });
        logger.logStringWithObj("addUserProfile result", result);
        if (result != null) {
            throw new Error('UserProfile Already Exists');
        }
        //set uid for user
        userProfile.uid = await Utils.smallUID();
        logger.logStringWithObj("addUserProfile new uid", userProfile.uid);
        result = await userProfile.save();
        logger.logStringWithObj("Success addUserProfile", result);
        response.success(req, res, "Success addUserProfile", result);

    } catch (error) {
        logger.logErrorStringWithObj("Error addUserProfile", error.message);
        response.serverError(req, res, "Error addUserProfile", error);
    }
});

//////////
module.exports = router;