"use strict";
var mocks_1 = require('./mocks');
var RacingDataService = (function () {
    function RacingDataService() {
    }
    RacingDataService.prototype.getRaces = function () {
        return mocks_1.RACING;
    };
    return RacingDataService;
}());
exports.RacingDataService = RacingDataService;
//# sourceMappingURL=racing-data.service.js.map