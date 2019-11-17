const request = require("../../utils/request");
const config = require("../config");

module.exports = ({url, method = "get", options = {}}) => {
    let opts = Object.assign(options, {
        headers: {
            referer: "https://c.y.qq.com/",
            host: "c.y.qq.com"
        }
    });
    // console.log(opts)
    return request(url, method, opts);
};