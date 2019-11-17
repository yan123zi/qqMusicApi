const common=require("../common_u");
const commonParams=require("../../config").commonParams;
//获取相似的歌手
module.exports=({method="get",params={},option={}})=>{
    params=Object.assign(params,commonParams);
    let options = Object.assign(option, {params});
    return common({url:"https://u.y.qq.com/cgi-bin/musicu.fcg",method,options});
};