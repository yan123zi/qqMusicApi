const Router = require("koa-router");
const router = new Router();
const config = require("../module/config");
const apis = require("../module/index");
const moment = require("moment");
const getCommon = require("../utils/getCommon");
const url = require("url");
//获取所有歌单分类
router.get("/playList/allCategories", async (ctx, next) => {
    let params = Object.assign({
        format: "json",
        outCharset: "utf-8"
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    await apis.playListCategories(props).then((res) => {
        let response = res.data;
        ctx.statusCode = 200;
        ctx.body = {
            response
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取歌单列表
/**
 * @param {categoryId} 分类
 * @param {limit,ein} 每页显示数量 limit:19 offset:0
 * @param {offset,sin} 偏移量
 * @param {sortId} 排序id：2:最新 5:推荐
 */
router.get("/playList/:categoryId?", async (ctx, next) => {
    let categoryId = ctx.params.categoryId || 10000000;
    let sortId = ctx.query.sortId || 5;
    let sin = ctx.query.offset || 0;
    let ein = ctx.query.limit || 19;
    let params = Object.assign({
        format: "json",
        outCharset: "utf-8",
        categoryId,
        sortId,
        sin,
        ein
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    await apis.playLists(props).then(res => {
        let response = res.data;
        ctx.statusCode = 200;
        ctx.body = {
            response
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取歌单详情
router.get("/playListDetails/:id?", async (ctx, next) => {
    let params = Object.assign({
        format: "json",
        outCharset: "utf-8",
        disstid: ctx.params.id,
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        new_format: 1,
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    await apis.playListDetails(props).then(res => {
        let response = res.data;
        ctx.statusCode = 200;
        ctx.body = {
            response
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取歌单评论
//pagesize,pagenum就不用多说了每页显示数量和页码
//reqtype,biztype:{2,3}歌单的评论{2,4}排行榜的评论{2,2}专辑的评论，{2,5}mv的评论,{2,1}歌曲的评论
router.get("/Comments/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let pagesize = ctx.query.pagesize || 25;
    let pagenum = ctx.query.pagenum || 0;
    let reqtype = ctx.query.reqtype || 2;
    let biztype = ctx.query.biztype || 3;
    let rootcommentid = pagenum ? ctx.query.rootcommentid : '';
    let checkrootcommentid = !pagenum ? true : !!rootcommentid;
    let params = Object.assign({
        format: 'json',
        outCharset: 'utf-8',
        g_tk: 5381,
        cid:205360772,
        reqtype,
        biztype,
        topid: id,
        cmd:8,
        needmusiccrit: 0,
        pagenum,
        pagesize,
        lasthotcommentid: rootcommentid,
        domain: 'qq.com',
        ct: 24,
        cv: 10101010,
    });
    let props = {
        method: 'get',
        params,
        options: {}
    };
    if (id && checkrootcommentid) {
        await apis.Comments(props).then((res) => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    } else {
        ctx.status = 400;
        ctx.body = {
            response: 'Don\'t have id or rootcommentid',
        }
    }
});
//榜单
router.get("/topList/:id?", async (ctx, next) => {
    let id = parseInt(ctx.params.id);
    let offset = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 20);
    let date = new Date();
    let period = "";
    if (id != 4 && id != 27 && id != 62) {
        period = date.getFullYear() + "_" + config.weekNum;
    } else {
        period = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
    let data = {
        detail: {
            module: "musicToplist.ToplistInfoServer",
            method: "GetDetail",
            param: {
                topId: id,
                offset,
                num,
                period
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    if (id) {
        await apis.topList(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param id of toplist"
        }
    }
});
//获取专辑列表
//id: 1(内地) 2(港台) 3(欧美) 4(韩国) 5(日本) 6(其它)
router.get("/albumList/:id?", async (ctx, next) => {
    //{"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":4,"start":0,"num":20}},"comm":{"ct":24,"cv":0}}
    let id = parseInt(ctx.params.id||1);
    let start = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 20);
    let data = {
        new_album: {
            module: "newalbum.NewAlbumServer",
            method: "get_new_album_info",
            param: {
                area: id,
                start,
                num
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    if (id) {
        await apis.albumList(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of albumList type -> 'id'"
        }
    }
});
//获取专辑歌曲列表
router.get("/albumSongList/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":10000},"albumSonglist":{"method":"GetAlbumSongList","param":{"albumMid":"004SsnQv1Wi7ZU","albumID":0,"begin":0,"num":10,"order":2},"module":"music.musichallAlbum.AlbumSongList"}}
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 10);
    let data = {
        albumSonglist: {
            module: "music.musichallAlbum.AlbumSongList",
            method: "GetAlbumSongList",
            param: {
                albumMid: id,
                albumID: 0,
                order: 2,
                begin,
                num
            }
        },
        comm: {
            ct: 24,
            cv: 10000
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
    if (id) {
        await apis.albumList(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of album -> 'id'"
        }
    }
});
//获取专辑详情
router.get("/albumDetails/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":10000},"albumDetail":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":"0036eU2A4VBjo2"}}}
    let id = ctx.params.id;
    let data = {
        albumDetail: {
            module: "music.musichallAlbum.AlbumInfoServer",
            method: "GetAlbumDetail",
            param: {
                albumMid: id,
            }
        },
        comm: {
            ct: 24,
            cv: 10000
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
    if (id) {
        await apis.albumDetails(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of album -> 'id'"
        }
    }
});
//获取歌手列表
/**
 * @param area 歌手所在地区
 * @param sex  歌手性别
 * @param genre 歌手类别
 * @param index 歌手名称按abcd排序
 */
router.get("/singerList", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":80,"cur_page":2}}}
    let sin = parseInt(ctx.query.offset || 0);
    let cur_page = parseInt(ctx.query.page || 1);
    let area = parseInt(ctx.query.area || -100);
    let sex = parseInt(ctx.query.sex || -100);
    let genre = parseInt(ctx.query.genre || -100);
    let index = parseInt(ctx.query.index || -100);
    let data = {
        singerList: {
            module: "Music.SingerListServer",
            method: "get_singer_list",
            param: {
                area,
                sex,
                genre,
                index,
                albumID: 0,
                order: 2,
                sin,
                cur_page
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    await apis.singerList(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取歌手歌曲列表
router.get("/singerSongList/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":0},"singerSongList":{"method":"GetSingerSongList","param":{"order":1,"singerMid":"0025NhlN2yWrP4","begin":0,"num":10},"module":"musichall.song_list_server"}}
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 10);
    let data = {
        singerSongList: {
            module: "musichall.song_list_server",
            method: "GetSingerSongList",
            param: {
                singerMid: id,
                order: 1,
                begin,
                num
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    if (id) {
        await apis.singerList(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//歌手的所有专辑
router.get("/singerAlbums/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":0},"getAlbumList":{"method":"GetAlbumList","param":{"singerMid":"0025NhlN2yWrP4","order":0,"begin":0,"num":5,"songNumTag":0,"singerID":0},"module":"music.musichallAlbum.AlbumListServer"}}
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 10);
    let data = {
        getAlbumList: {
            module: "music.musichallAlbum.AlbumListServer",
            method: "GetAlbumList",
            param: {
                singerMid: id,
                order: 0,
                songNumTag: 0,
                singerID: 0,
                begin,
                num
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    if (id) {
        await apis.singerAlbums(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//获取相似歌手
router.get("/similarSingers/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":10000},"similarSingerList":{"method":"GetSimilarSingerList","param":{"singerId":265,"singerMid":"001JDzPT3JdvqK","num":5},"module":"music.SimilarSingerSvr"}}
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 5);
    let data = {
        similarSingerList: {
            module: "music.SimilarSingerSvr",
            method: "GetSimilarSingerList",
            param: {
                singerMid: id,
                order: 1,
                begin,
                num
            }
        },
        comm: {
            ct: 24,
            cv: 10000
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
    if (id) {
    await apis.similarSingers(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//获取歌手的mv
router.get("/singerMvs/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 5);
    let params = Object.assign({
        cid: 205360581,
        singermid: id,
        order: "listen",
        begin,
        num,
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    if (id) {
        await apis.singerMvs(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//获取歌手的粉丝上传
router.get("/singerFunsUp/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let begin = parseInt(ctx.query.offset || 0);
    let num = parseInt(ctx.query.limit || 5);
    let params = Object.assign({
        cid: 205360581,
        singermid: id,
        order: "time",
        begin,
        num,
        cmd: 1
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    if (id) {
        await apis.singerFunsUp(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//获取歌手详细信息
router.get("/singerDetails/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let $ = await getCommon.getHtmlDocument("https://y.qq.com/n/yqq/singer/" + id + ".html");
    let attention = await getCommon.getAttention(id);
    attention = attention.num;
    //https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getnum.fcg
    let desc = $("#short_desc").text().replace(/[\n]/g, "<br>");
    let count = $(".data_statistic__number");
    let songCount = parseInt(count.eq(0).text());
    let albumCount = parseInt(count.eq(1).text());
    let mvCount = parseInt(count.eq(2).text());
    let picUrl = $(".data__photo").attr("src");
    let name = $(".data__photo").attr("alt");
    let data = {
        name,
        picUrl,
        desc,
        songCount,
        albumCount,
        mvCount,
        attention
    };
    if (id) {
        ctx.body = {
            data
        }
    }else {
        ctx.body={
            message:"please input param of singer -> 'id'"
        }
    }
});
//获取歌曲详情
router.get("/songDetails/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let song_id = parseInt(ctx.query.songId);
    //{"comm":{"ct":24,"cv":0},"songinfo":{"method":"get_song_detail_yqq","param":{"song_type":0,"song_mid":"000V8En93R3Dvd","song_id":244905368},"module":"music.pf_song_detail_svr"}}
    //{"comm":{"ct":24,"cv":0},"songinfo":{"method":"get_song_detail_yqq","param":{"song_type":0,"song_mid":"003KExF60zMMGK","song_id":9103820},"module":"music.pf_song_detail_svr"}}
    let data = {
        songinfo: {
            module: "music.pf_song_detail_svr",
            method: "get_song_detail_yqq",
            param: {
                song_type: 0,
                song_mid: id,
                song_id
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    await apis.songDetails(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//歌曲的相关热门歌单
router.get("/songRelatePlayList/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":0},"song_gedan":{"module":"music.mb_gedan_recommend_svr","method":"get_related_gedan","param":{"song_id":9103820,"song_type":1,"sin":0,"last_id":0}}}
    let song_id = parseInt(ctx.params.id);
    let data = {
        song_gedan: {
            module: "music.mb_gedan_recommend_svr",
            method: "get_related_gedan",
            param: {
                song_type: 1,
                song_id
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    await apis.relateHotPlayList(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//歌曲相关mv
router.get("/songRelateMv/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":0},"mv":{"module":"MvService.MvInfoProServer","method":"GetMvBySongid","param":{"mids":["003KExF60zMMGK"]}}}
    let id = ctx.params.id;
    let data = {
        mv: {
            module: "MvService.MvInfoProServer",
            method: "GetMvBySongid",
            param: {
                mids: [id]
            }
        },
        comm: {
            ct: 24,
            cv: 0
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
    await apis.relateSongMv(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//歌曲歌词
router.get("/songLyric/:id?", async (ctx, next) => {
    let id = parseInt(ctx.params.id);
    let params = Object.assign({
        nobase64: 1,
        musicid: id,
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    await apis.songLyric(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//http://ws.stream.qqmusic.qq.com/C400001eUOj20fEQlk.m4a
//https://u.y.qq.com/cgi-bin/musicu.fcg
//获取音乐的链接
router.get("/songUrl/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let obj = await getCommon.getMusicVkey(id);
    let purl = obj[0].purl;
    let data = purl.split(/[&?=]/g);
    let guid = data[data.findIndex((n) => {
        if (n == "guid") return n
    }) + 1];
    let vkey = data[data.findIndex((n) => {
        if (n == "vkey") return n
    }) + 1];
    let uin = data[data.findIndex((n) => {
        if (n == "uin") return n
    }) + 1];
    let fromtag = data[data.findIndex((n) => {
        if (n == "fromtag") return n
    }) + 1];
    ctx.body = {
        guid,
        vkey,
        uin,
        fromtag,
        songUrl: "http://ws.stream.qqmusic.qq.com/amobile.music.tc.qq.com/" + data[0] + "?guid=" + guid + "&vkey=" + vkey + "&uin=" + uin + "&fromtag=" + fromtag
    }
});
//获取首页的推荐
router.get("/getRecommend", async (ctx, next) => {
    let data = {
        comm: {
            ct: 24
        },
        category: {
            method: "get_hot_category",
            param: {
                qq: ""
            },
            module: "music.web_category_svr"
        },
        recomPlaylist: {
            method: "get_hot_recommend",
            param: {
                async: 1,
                cmd: 2
            },
            module: "playlist.HotRecommendServer"
        },
        playlist: {
            method: "get_playlist_by_category",
            param: {
                id: 8,
                curPage: 1,
                size: 40,
                order: 5,
                titleid: 8
            },
            module: "playlist.PlayListPlazaServer"
        },
        new_song: {
            module: "newsong.NewSongServer",
            method: "get_new_song_info",
            param: {
                area: 1,
                sin: 0,
                num: 10
            }
        },
        new_album: {
            module: "newalbum.NewAlbumServer",
            method: "get_new_album_info",
            param: {
                area: 1,
                sin: 0,
                num: 10
            }
        },
        new_album_tag: {
            module: "newalbum.NewAlbumServer",
            method: "get_new_album_area",
            param: {}
        },
        toplist: {
            module: "musicToplist.ToplistInfoServer",
            method: "GetAll",
            param: {}
        },
        focus: {
            module: "QQMusic.MusichallServer",
            method: "GetFocus",
            param: {}
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
    await apis.indexRecommend(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取热门搜索关键字
router.get("/hotKeySearch", async (ctx, next) => {
    let params = Object.assign({});
    let props = {
        method: "get",
        params,
        options: {}
    };
    await apis.hotKeySearch(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获取异步搜索显示
router.get("/smallShow/:key?", async (ctx, next) => {
    let key = ctx.params.key;
    let params = Object.assign({
        is_xml: 0,
        key
    });
    let props = {
        method: "get",
        params,
        options: {}
    };
    if (key) {
        await apis.smallBoxShow(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of search syncShow key -> 'key'"
        }
    }
});
// w：搜索关键字
// p：当前页
// n：每页歌曲数量
//搜索关键字对应的内容
// t:
// 	7:歌词
// 	12:mv
// 	8:专辑
// 	0:单曲
router.get("/searchKey/:key?", async (ctx, next) => {
    let w = ctx.params.key;
    let n = ctx.query.limit || 10;
    let p = ctx.query.page || 1;
    let type = ctx.query.type || "song";
    let params = {};
    if (type == "song" || type == "album" || type == "mv" || type == "lyric") {
        params = Object.assign({
            ct: 24,
            qqmusic_ver: 1298,
            new_json: 1,
            remoteplace: "txt.yqq." + type,
            searchid: moment().valueOf(),
            t: type == "song" ? 0 : type == "album" ? 8 : type == "mv" ? 12 : type == "lyric" ? 7 : 0,
            aggr: 1,
            cr: 1,
            catZhida: 1,
            lossless: 0,
            flag_qc: 0,
            p,
            n,
            w
        });
    } else if (type == "playlist") {
        params = Object.assign({
            ct: 24,
            qqmusic_ver: 1298,
            remoteplace: "txt.yqq.playlist",
            flag_qc: 0,
            page_no: 0,
            num_per_page: 5,
            query: w
        });
    } else {
        params = Object.assign({
            ct: 24,
            qqmusic_ver: 1298,
            p,
            n,
            searchid: moment().valueOf(),
            remoteplace: "txt.yqq.user",
            w
        });
    }
    let props = {
        method: "get",
        params,
        options: {},
        type
    };
    if (w) {
        await apis.searchKey(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param of search -> 'key'"
        }
    }
});
//获取mv通过tag
//tag:
// all:精选
// neidi:内地
// korea:韩国
// gangtai:港台
// oumei:欧美
// janpan:日本
router.get("/getMvByTag/:tag?", async (ctx, next) => {
    let lan = ctx.params.tag||"all";
    let params = Object.assign({
        cmd: "shoubo",
        lan,
    });
    let props = {
        method: "get",
        params,
        options: {},
    };
    if (lan) {
        await apis.getMvByTag(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param tag!"
        }
    }
});
//获取mv列表
router.get("/getMvList", async (ctx, next) => {
    // {"comm":{"ct":24},"mv_list":{"module":"MvService.MvInfoProServer","method":"GetAllocMvInfo","param":{"start":0,"size":20,"version_id":7,"area_id":17,"order":1}}}
    let version_id = parseInt(ctx.query.versionId||7);
    let area_id = parseInt(ctx.query.areaId||15);
    let start = parseInt(ctx.query.offset||0);
    let size = parseInt(ctx.query.limit||20);
    let data = {
        mv_list: {
            module: "MvService.MvInfoProServer",
            method: "GetAllocMvInfo",
            param: {
                start,
                size,
                version_id,
                area_id,
                order:1
            }
        },
        comm: {
            ct: 24
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
    await apis.mvList(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
//获得mv的详情
router.get("/mvDetails/:id?", async (ctx, next) => {
    //{"comm":{"ct":24,"cv":4747474},
    // "mvinfo":{"module":"video.VideoDataServer","method":"get_video_info_batch",
    // "param":{"vidlist":["h00326uiair"],
    // "required":["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid"]}},
    // "other":{"module":"video.VideoLogicServer","method":"rec_video_byvid",
    // "param":{"vid":"h00326uiair","required":["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid","uploader_headurl","uploader_nick","uploader_encuin","uploader_uin","uploader_hasfollow","uploader_follower_num"],"support":1}}}
    let id = ctx.params.id;
    let data = {
        mvinfo: {
            module: "video.VideoDataServer",
            method: "get_video_info_batch",
            param: {
                vidlist: [id],
                required: ["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid"]
            }
        },
        other:{
            module:"video.VideoLogicServer",
            method:"rec_video_byvid",
            param:{
                vid:id,
                required:["vid","type","sid","cover_pic","duration","singers","video_switch","msg","name","desc","playcnt","pubdate","isfav","gmid","uploader_headurl","uploader_nick","uploader_encuin","uploader_uin","uploader_hasfollow","uploader_follower_num"],
                support:1
            }
        },
        comm: {
            ct: 24,
            cv: 4747474
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
    if (id) {
        await apis.mvDetails(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param id!"
        }
    }
});
//获取mv的播放链接
//{"getMvUrl":{"module":"gosrf.Stream.MvUrlProxy","method":"GetMvUrls","param":{"vids":["v0032zk67ui"],"request_typet":10001}}}
router.get("/mvUrl/:id?", async (ctx, next) => {
    let id = ctx.params.id;
    let data = {
        getMvUrl: {
            module: "gosrf.Stream.MvUrlProxy",
            method: "GetMvUrls",
            param: {
                vids: [id],
                request_typet: 10001
            }
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
    if (id) {
        await apis.mvUrl(props).then(res => {
            let response = res.data;
            ctx.status = 200;
            ctx.body = {
                response,
            }
        }).catch(error => {
            console.log(`error`.error, error);
        });
    }else {
        ctx.body={
            message:"please input param id!"
        }
    }
});
//获取mv排行榜
//rank_type,area_type
//0,0总榜
//0,1内地榜
//0,5日本榜
//0,3欧美榜
//0,2港台榜
//0,4韩国榜
router.get("/mvRank", async (ctx, next) => {
   //{"comm":{"ct":24,"cv":0},
    // "request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":0,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    //{"comm":{"ct":24,"cv":0},"request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":1,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    //{"comm":{"ct":24,"cv":0},"request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":5,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    //{"comm":{"ct":24,"cv":0},"request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":3,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    //{"comm":{"ct":24,"cv":0},"request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":2,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    //{"comm":{"ct":24,"cv":0},"request":{"method":"get_video_rank_list","param":{"rank_type":0,"area_type":4,"required":["vid","name","singers","cover_pic","pubdate"]},"module":"video.VideoRankServer"}}
    let rank_type=parseInt(ctx.query.rankType||0);
    let area_type=parseInt(ctx.query.areaType||0);
    let data = {
        request: {
            module: "video.VideoRankServer",
            method: "get_video_rank_list",
            param: {
                rank_type,
                area_type,
                required: ["vid","name","singers","cover_pic","pubdate"]
            }
        },
        comm:{
            ct:24,
            cv:0
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
    await apis.mvRank(props).then(res => {
        let response = res.data;
        ctx.status = 200;
        ctx.body = {
            response,
        }
    }).catch(error => {
        console.log(`error`.error, error);
    });
});
module.exports = router;