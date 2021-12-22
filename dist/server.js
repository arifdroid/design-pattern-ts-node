"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
        this.db = {};
    }
    InMemoryDatabase.prototype.set = function (newValue) {
        this.db[newValue === null || newValue === void 0 ? void 0 : newValue.id] = newValue;
    };
    InMemoryDatabase.prototype.get = function (id) {
        return this.db[id];
    };
    return InMemoryDatabase;
}());
