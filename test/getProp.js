const {getProp} = require("../index");
const assert = require("assert");

describe("getProp()", () => {
    const data = {
        num1: 123,
        obj1: {
            key: {
                id: 444
            }
        }
    };
    it("getProp simple key", function () {
        assert.strictEqual(getProp(data, "num1"), 123)
    });
    it("getProp composite key", function () {
        assert.strictEqual(getProp(data, "obj1.key.id"), 444)
    });
    it("getProp undefined from simple key", function () {
        assert.strictEqual(getProp(data, "obj2"), undefined)
    });
    it("getProp undefined from start composite key", function () {
        assert.strictEqual(getProp(data, "obj2.param.key"), undefined)
    });
    it("getProp undefined from middle composite key", function () {
        assert.strictEqual(getProp(data, "obj1.param.key"), undefined)
        assert.strictEqual(getProp(data, "obj1.param.key.id"), undefined)
    });
})