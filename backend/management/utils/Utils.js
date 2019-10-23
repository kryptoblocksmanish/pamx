const uniqid = require('uniqid');

class Utils {
    constructor() { }

    static getCurrentUTCTimestamp() {
        var tmLoc = new Date();
        return tmLoc.getTime();
    }

    static isValidReq(req) {
        return req.isAuthenticated();
    }

    static smallUID() {
        return uniqid();
    }


}

module.exports = Utils;