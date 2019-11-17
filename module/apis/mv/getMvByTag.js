const common=require("../common_y");
const commonParams=require("../../config").commonParams;
//根据mv的类型获取mv列表
//https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg
module.exports = ({method = "get", params = {}, option = {}}) => {
    params=Object.assign(params,commonParams);
    let options = Object.assign(option, {params});
    // console.log(options);
    return common({url: "https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag", method, options});
};