let express = require('express');
let router = express.Router();
let logger = require('../libs/Logger');
let response = require('../libs/Response');
var rdp = require('node-rdp');

router.post("/testConnectRDP", async function (req, res) {
    logger.logString("Enter: connectRDP");
    logger.logObj(req.params);
    logger.logObj(req.body);
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


router.get("/testConnectSSH", async function (req, res) {
    logger.logString("Enter: connectSSH");

    try {
        // var child_process = require('child_process');
        // console.log("child_process:::" + child_process);
        // child_process.execSync("start cmd.exe /K node actualConnect.js");

        const exec = require('child_process').exec;
        const child = exec('start cmd.exe /K node actualConnect.js',
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
    });

        // logger.logString("ConnectSSH Closing...");
        // response.success(req, res, "ConnectSSH Closed", "DONE....");
        // hostname = "test.rebex.net";
        // username = "demo";
        // password = "password";
        // port = 22;
        // var Client = require('ssh2').Client;
        // var conn = new Client();
        // conn.on('ready', function () {
        //     console.log('Client :: ready');
        //     conn.shell(function (err, stream) {
        //         if (err) throw err;

        //         const stdinListener = (data) => {
        //             skipNext = true;
        //             stream.stdin.write(data);
        //         };

        //         stream.on('close', function () {
        //             process.stdin.removeListener("data", stdinListener)
        //             conn.end();
        //             // resolve("ENDED CONNECTION");
        //             logger.logString("ConnectSSH Closing...");
        //             response.success(req, res, "ConnectSSH Closed", "DONE....");
        //         }).stderr.on('data', function (data) {
        //             resolve();
        //         });

        //         // skip next stops double printing of input
        //         let skipNext = false;
        //         stream.stdout.on("data", (data) => {
        //             if (skipNext) { return skipNext = false; }
        //             process.stdout.write(data);
        //         })

        //         process.stdin.on("data", stdinListener)
        //     });
        // }).connect({
        //     host: hostname,
        //     port: 22,
        //     username: username,
        //     password: password,
        //     tryKeyboard: true
        // });

    } catch (error) {
        logger.logErrorStringWithObj("Error in connectSSH", error.message);
        response.serverError(req, res, "Error in connectSSH", error.message);
    }
})


module.exports = router;

