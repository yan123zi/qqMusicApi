//playlist
const playListCategories = require("./apis/playLists/playListCategories");
const playLists = require("./apis/playLists/playLists");
const playListDetails = require("./apis/playLists/playListDetails");
//comments
const Comments = require("./apis/comment/Comments");
//topList
const topList = require("./apis/topList/topList");
//album
const albumList = require("./apis/album/albumListsAndInfo");
const albumDetails = require("./apis/album/albumDetails");
//singer
const singerList = require("./apis/singer/singerListAndSingerSongList");
const similarSingers = require("./apis/singer/similarSingers");
const singerAlbums = require("./apis/singer/singerAlbums");
const singerFunsUp = require("./apis/singer/singerFunsUp");
const singerMvs = require("./apis/singer/singerMvs");
//song
const songDetails = require("./apis/song/songDetais");
const relateHotPlayList = require("./apis/song/relateHotPlayList");
const relateSongMv = require("./apis/song/relateSongMv");
const songLyric = require("./apis/song/songLyric");
//recommend
const indexRecommend = require("./apis/recommend/indexRecommend");
//search
const hotKeySearch = require("./apis/search/hotKeySearch");
const smallBoxShow = require("./apis/search/smallBoxShow");
const searchKey = require("./apis/search/searchKey");
//mv
const mvList = require("./apis/mv/mvList");
const getMvByTag = require("./apis/mv/getMvByTag");
const mvDetails=require("./apis/mv/mvDetails");
const mvUrl=require("./apis/mv/mvUrl");
const mvRank=require("./apis/mv/mvRank");
//暴露的接口
module.exports = {
    playListCategories,
    playLists,
    playListDetails,
    Comments,
    topList,
    albumList,
    albumDetails,
    singerList,
    similarSingers,
    singerAlbums,
    singerFunsUp,
    singerMvs,
    songDetails,
    relateHotPlayList,
    relateSongMv,
    songLyric,
    indexRecommend,
    hotKeySearch,
    smallBoxShow,
    searchKey,
    mvList,
    getMvByTag,
    mvDetails,
    mvUrl,
    mvRank
};