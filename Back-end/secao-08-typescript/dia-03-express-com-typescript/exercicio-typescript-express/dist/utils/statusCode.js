"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["OK"] = 200] = "OK";
    statusCodes[statusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    statusCodes[statusCodes["CREATED"] = 201] = "CREATED";
    statusCodes[statusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    statusCodes[statusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    statusCodes[statusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
})(statusCodes || (statusCodes = {}));
;
exports.default = statusCodes;
