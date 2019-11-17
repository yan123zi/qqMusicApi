//https://c.y.qq.com/soso/fcgi-bin/client_search_cp 单曲，专辑，mv，歌词
const common = require("../common_y");
const commonParams = require("../../config").commonParams;
//搜索关键字
//https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist 歌单
//https://c.y.qq.com/soso/fcgi-bin/client_search_user   用户
module.exports = ({method = "get", params = {}, option = {}, type = "song"}) => {
    params = Object.assign(params, commonParams);
    let options = Object.assign(option, {params});
    // console.log(options);
    let url="https://c.y.qq.com/soso/fcgi-bin/client_search_cp";
    if (type=="song"||type=="album"||type=="mv"||type=="lyric") {
        url="https://c.y.qq.com/soso/fcgi-bin/client_search_cp";
    }else if (type=="playlist"){
        url="https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist";
    }else {
        url="https://c.y.qq.com/soso/fcgi-bin/client_search_user";
    }
    return common({url, method, options});
};