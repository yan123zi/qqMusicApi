const cheerio = require("cheerio");
const axios = require("axios");
const moment = require("moment");
const commonU = require("../module/apis/common/CommonUModule");
//获取网页的document对象
let getHtmlDocument = async (url) => {
    let html = (await axios.get(url)).data;
    let $ = cheerio.load(html);
    return $;
};
//获取歌手的关注数
let getAttention = async (id) => {
    let params = Object.assign({
        format: "json",
        outCharset: "utf-8",
        g_tk: 5381,
        notice: 0,
        platform: "yqq",
        needNewCode: 0,
        singermid: id,
        utf8: 1,
        rnd: moment().valueOf()
    });
    let options = Object.assign({headers: {referer: "https://c.y.qq.com/", host: "c.y.qq.com"}}, {params});
    let fe = await axios.get("https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getnum.fcg", options);
    return Object.assign(fe.data);
};
//https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg
//获取评论数
// let getCommentCount

//获取music的vkey
let getMusicVkey = async (id) => {
    //{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"8312529600","calltype":0,"userip":""}},
    // "req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"8312529600","songmid":["003KExF60zMMGK"],"songtype":[0],"uin":"673343330","loginflag":1,"platform":"20"}},"comm":{"uin":673343330,"format":"json","ct":24,"cv":0}}
    let data = {
        req: {
            module: "CDN.SrfCdnDispatchServer",
            method: "GetCdnDispatch",
            param: {
                guid: "8312529600",
                calltype: 0,
                userip: ""
            }
        },
        req_0: {
            module: "vkey.GetVkeyServer",
            method: "CgiGetVkey",
            param: {
                guid: "8312529600",
                songmid: [id],
                songtype: [0],
                uin: "0",
                loginflag: 1,
                platform: "20"
            }
        },
        comm: {
            ct: 24,
            cv: 0,
            uin: 0,
            format: "json"
        }
    };
    data = JSON.stringify(data);
    let params = Object.assign({
        data
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    let fe = await commonU(props);
    let medinfo = Object.assign(fe.data.req_0.data.midurlinfo);
    // console.log(medinfo);
    return medinfo;
};
// getMusicVkey("000Qepff3UyUWO");
module.exports = {getHtmlDocument, getAttention, getMusicVkey};