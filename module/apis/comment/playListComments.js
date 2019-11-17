const common = require("../common_y");
//获取歌单评论
module.exports = ({method = "get", params = {}, option = {}}) => {
    let options = Object.assign(option, {params});
    return common({url: "https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg", method, options});
};