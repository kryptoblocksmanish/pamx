hostname = "test.rebex.net";
username = "demo";
password = "password";
port = 22;
try {
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.shell(function (err, stream) {
            if (err) throw err;

            const stdinListener = (data) => {
                skipNext = true;
                stream.stdin.write(data);
            };

            stream.on('close', function () {
                process.stdin.removeListener("data", stdinListener)
                conn.end();
                console.log("EXITING......");

                return "CLOSE";
                // resolve("ENDED CONNECTION");
                // process.on('exit', function(code) {
                //     return console.log(`About to exit with code ${code}`);
                // });


                // var child_process = require('child_process');
                // child_process.execSync("exit");
                // console.log("DONE ??? ......");

            }).stderr.on('data', function (data) {
                resolve();
            });

            // skip next stops double printing of input
            let skipNext = false;
            stream.stdout.on("data", (data) => {
                if (skipNext) { return skipNext = false; }
                process.stdout.write(data);
            })

            process.stdin.on("data", stdinListener)
        });
    }).connect({
        host: hostname,
        port: 22,
        username: username,
        password: password,
        tryKeyboard: true
    });
} catch (error) {
    console.log("ERrrr:::", error)
}