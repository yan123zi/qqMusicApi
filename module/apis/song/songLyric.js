//https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_yqq.fcg
//获取歌词
const common=require("../common_y");
const commonParams=require("../../config").commonParams;
module.exports = ({method = "get", params = {}, option = {}}) => {
    params=Object.assign(params,commonParams);
    let options = Object.assign(option, {params});
    return common({url: "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_yqq.fcg", method, options});
};