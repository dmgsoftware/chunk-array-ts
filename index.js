"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairs = exports.chunks = void 0;
var chunks = function (arr, n) {
    if (!arr || !n)
        return arr;
    var length = arr.length;
    var slicePoint = 0;
    var ret = [];
    while (slicePoint < length) {
        ret.push(arr.slice(slicePoint, slicePoint + n));
        slicePoint += n;
    }
    return ret;
};
exports.chunks = chunks;
var pairs = function (arr) {
    return (0, exports.chunks)(arr, 2);
};
exports.pairs = pairs;
exports.default = exports.chunks;
