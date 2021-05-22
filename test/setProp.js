const {setProp} = require("../index");
const assert = require("assert");

describe("setProp()", () => {
    const data = {
        num: 123,
        obj1: {
            key: {
                id: {
                    num: 111
                }
            }
        }
    };
    it("setProp set simple in non-defined key", function () {
        setProp(data, "num1", 33);
        assert.strictEqual(data.num1, 33);
    });
    it("setProp set simple in defined key", function () {
        setProp(data, "num", 44);
        assert.strictEqual(data.num, 44);
    });
    it("setProp set composite in non-defined key", function () {
        setProp(data, "obj2.param1.param2.param3", 66);
        assert.strictEqual(data.obj2.param1.param2.param3, 66);
    });
    it("setProp set composite in defined key", function () {
        setProp(data, "obj1.key.uid.string", "77");
        assert.strictEqual(data.obj1.key.uid.string, "77");
        assert.strictEqual(data.obj1.key.id.num, 111);
    });
})