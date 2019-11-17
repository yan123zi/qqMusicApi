const common=require("../common_y");
const commonParams=require("../../config").commonParams;
//https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg
//获取异步加载的搜索显示
module.exports = ({method = "get", params = {}, option = {}}) => {
    params=Object.assign(params,commonParams);
    let options = Object.assign(option, {params});
    // console.log(options);
    return common({url: "https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg", method, options});
};