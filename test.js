"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const index_1 = __importDefault(require("./index"));
const index_2 = __importDefault(require("./index"));
//var chunks = require('./').chunks
//var pairs = require('./').pairs
(0, mocha_1.describe)('Chunk Array', function () {
    (0, mocha_1.describe)('#chunks', function () {
        (0, mocha_1.it)('should turn array into thunks of n size', function () {
            var arr = [1, 2, 3, 4, 5, 6];
            var len1chunks = [[1], [2], [3], [4], [5], [6]];
            var len2chunks = [[1, 2], [3, 4], [5, 6]];
            var len3chunks = [[1, 2, 3], [4, 5, 6]];
            var len4chunks = [[1, 2, 3, 4], [5, 6]];
            var len5chunks = [[1, 2, 3, 4, 5], [6]];
            var len6chunks = [[1, 2, 3, 4, 5, 6]];
            var len7chunks = [[1, 2, 3, 4, 5, 6]];
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 0), arr);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 1), len1chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 2), len2chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 3), len3chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 4), len4chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 5), len5chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 6), len6chunks);
            mocha_1.assert.deepEqual((0, index_1.default)(arr, 7), len7chunks);
        });
    });
    (0, mocha_1.describe)('#pairs', function () {
        (0, mocha_1.it)('should turn array into pairs', function () {
            var arr = [1, 2, 3, 4, 5, 6, 7];
            var ps = [[1, 2], [3, 4], [5, 6], [7]];
            mocha_1.assert.deepEqual((0, index_2.default)(arr), ps);
        });
    });
});
//# sourceMappingURL=test.js.map