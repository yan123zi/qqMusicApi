const common=require("../common_y");
const commonParams=require("../../config").commonParams;
//获取热门搜索关键字
//https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg
module.exports = ({method = "get", params = {}, option = {}}) => {
    params=Object.assign(params,commonParams);
    let options = Object.assign(option, {params});
    // console.log(options);
    return common({url: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg", method, options});
};