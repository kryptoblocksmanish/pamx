let express = require('express');
let router = express.Router();
let logger = require('../libs/Logger');
let response = require('../libs/Response');
let UserProfile = require('../models/UserProfileSchema');
let Utils = require('../utils/Utils');

router.get("/getAllUsers", async function (req, res) {
    logger.logString("Enter: user-profile");
    logger.logObj(req.params);
    try {
        // let userProfile = await UserProfile.findById(req.params.user_uuid);
        // let userProfile = await UserProfile.findOne({ 'uuid': req.params.user_uuid });
        let result = await UserProfile.find();
        response.success(req, res, "Success getAllUsers", result);
    } catch (error) {
        logger.logErrorStringWithObj("Error in getAllUsers", error.message);
        response.serverError(req, res, "Error in getAllUsers", error);
    }
});

router.post("/addNewUser", async function (req, res) {
    logger.logString("Enter: addNewUser");
    try {
        logger.logObj(req.params);
        logger.logObj(req.body);
        let userProfile = new UserProfile(req.body);
        //first check if the user exists
        let result = await UserProfile.findOne({
            'login_name': userProfile.login_name,
            'password': userProfile.password
        });
        logger.logStringWithObj("createNewUser result", result);
        if (result != null) {
            throw new Error('User Already Exists');
        }
        //set uuid for user
        userProfile.uuid = await Utils.smallUUID();
        logger.logStringWithObj("createNewUser new uuid", userProfile.uuid);
        result = await userProfile.save();
        logger.logStringWithObj("save user result", result);
        response.success(req, res, "Success in creating new user", result);

    } catch (error) {
        logger.logErrorStringWithObj("Error in createNewUser", error.message);
        response.serverError(req, res, "Error in createNewUser", error);
    }
});

//////////
module.exports = router;