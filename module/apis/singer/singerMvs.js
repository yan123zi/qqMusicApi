const common = require("../common_y");
const commonParams = require("../../config").commonParams;
//获取歌手mv
module.exports = ({method = "get", params = {}, option = {}}) => {
    params = Object.assign(params, commonParams);
    let options = Object.assign(option, {params});
    return common({url: "https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg", method, options});
};