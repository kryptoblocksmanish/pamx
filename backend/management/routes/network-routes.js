let express = require('express');
let router = express.Router();
let logger = require('../libs/Logger');
let response = require('../libs/Response');
var rdp = require('node-rdp');

router.get("/connectRDP", async function (req, res) {
    logger.logString("Enter: connectRDP");
    try {
        let conn = rdp({
            address: 'ec2-13-126-161-141.ap-south-1.compute.amazonaws.com',
            username: 'DOMAIN\\Administrator',
            password: '(RZRXOKa92s-8Thr.DEJVTARWrkPgzTm'
        })
        logger.logStringWithObj("conn:::", conn);

        // rdp({
        //     address: 'ec2-13-126-161-141.ap-south-1.compute.amazonaws.com',
        //     username: 'DOMAIN\\Administrator',
        //     password: '(RZRXOKa92s-8Thr.DEJVTARWrkPgzTm'
        //   }).then(function(k) {
        //     console.log('At this, point, the connection has terminated.', k);
        //   });

    } catch (error) {
        logger.logErrorStringWithObj("Error in connectRDP", error.message);
        response.serverError(req, res, "Error in connectRDP", error.message);
    }
})


module.exports = router;
