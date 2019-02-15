"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmallHandCool = /** @class */ (function () {
    function SmallHandCool() {
        this.name = 'twinkleJ';
    }
    //圆的面积
    SmallHandCool.prototype.circleArea = function (radius) {
        var area = Math.PI * Math.pow(radius, 2);
        return area;
    };
    return SmallHandCool;
}());
exports.SmallHandCool = SmallHandCool;
