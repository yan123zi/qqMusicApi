const common=require("../common_y");
//获取歌单详情
module.exports=({method="get",params={},option={}})=>{
    let options = Object.assign(option, {params});
    return common({url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",method,options});
};