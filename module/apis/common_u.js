const request = require("../../utils/request");
const config = require("../config");

module.exports = ({url, method = "get", options = {}}) => {
    let opts = Object.assign(options, {
        headers: {
            referer: "https://y.qq.com/",
            host: "u.y.qq.com"
        }
    });
    // console.log(opts)
    return request(url, method, opts);
};