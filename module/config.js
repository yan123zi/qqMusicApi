const commonParams={
    g_tk:5381,
    loginUin:0,
    hostUin:0,
    format:"json",
    inCharset:"utf8",
    outCharset:"utf-8",
    notice:0,
    platform:"yqq",
    needNewCode:0
};
let thisDay=new Date();
let firstDay=new Date(thisDay.getFullYear(),0,4);
let weekNum=Math.floor((thisDay.getTime()-firstDay.getTime())/(24*60*60*1000)/7);
module.exports={commonParams,weekNum};