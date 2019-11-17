const common = require("../common_y");
//获取歌单类别
module.exports = ({method = "get", params = {}, option = {}}) => {
    let options = Object.assign(option, {params});
    return common({url: "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg", method, options});
};
