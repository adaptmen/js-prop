

module.exports = {

    getProp: function(target, propPath) {
        const path = propPath.split(".");
        let result = target;
        for (let i = 0; i < path.length; i++) {
            if (result == null) {
                return result;
            }
            result = result[path[i]];
        }
        return result;
    },

    setProp: function(target, propPath, value) {
        const path = propPath.split(".");
        if (path.length === 1) {
            target[path[0]] = value;
            return;
        }
        let tempLink = target[path[0]]
        if (tempLink == null) {
            target[path[0]] = {};
            tempLink = target[path[0]];
        }
        for (let i = 1; i < path.length; i++) {
            const isLast = i === path.length - 1;
            if (!isLast) {
                if (typeof tempLink[path[i]] !== "object") {
                    tempLink[path[i]] = {};
                    tempLink = tempLink[path[i]];
                } else {
                    tempLink = tempLink[path[i]];
                }
            } else {
                tempLink[path[i]] = value;
            }
        }
    }

};