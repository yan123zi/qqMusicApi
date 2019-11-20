# qq音乐 API [![Build Status](https://travis-ci.org/yan123zi/qqMusicApi.svg?branch=master)](https://travis-ci.org/yan123zi/qqMusicApi)

qq音乐 Node.js API service

> QQ音乐API koa2 版本, 通过Web网页版请求QQ音乐接口数据, 有问题请提 [issue](https://github.com/yan123zi/qqMusicApi/issues)

> 当前代码仅共学习，不可做商业用途

### API结构图

![qq-music](https://raw.githubusercontent.com/yan123zi/qqMusicApi/master/screenshot/qqmusicapi.PNG)

### 环境要求

> 因为本项目采用的是`koa2`, 所以请确保你的`node`版本是7.6.0+

```
node -v
```
### 📦 安装

```
git clone git@github.com:yan123zi/qqMusicApi.git
npm install
```

### 🔨项目启动
```
npm run start 
```
项目监听端口是`3200`

## 功能包含

1.获取歌单所有分类

2.获取歌单列表

3.获取歌单详情

4.获取歌曲的链接

5.获取歌曲的歌词

6.获取歌曲的详情

7.获取歌曲的相关mv

8.获取歌曲的相关热门歌单

9.通过不同筛选规则获取mv列表

10.通过mv的标签种类获取mv列表

11.获取mv详情

12.获取mv播放链接

13.获取主页上的推荐

14.获取各种分类的榜单列表

15.获取新专辑列表

16.获取专辑详情

17.获取专辑内歌曲列表

18.获取热门搜索的关键字

19获取异步的搜索提示

20.搜索关键字

21.获取歌手列表

22.获取歌手的详细信息

23.获取歌手的歌曲列表

24.获取歌手的所有专辑

25.获取歌手的所有mv

26.获取歌手的粉丝上传内容

27.获取歌手的相似歌手

28.获取歌单，专辑，歌曲的评论

### 使用文档

使用`apis`详见[文档](https://yan123zi.github.io/qqMusicApi/#/)

### 关于项目

**打包发布**

```
使用nodejs和它的框架koa2做的爬虫项目，用来提供api服务，使用docker和持续集成打包发布到服务器。
只需修改.travis.yml文件和替换id_rsa.enc文件即可
```

**灵感来自**

[Rain120/qq-music-api](https://github.com/Rain120/qq-music-api)

**参考内容**

[Koa 2](https://koa.bootcss.com/)

[Axios](http://www.axios-js.com/)

### 项目不足

登录模块未编写敬请期待！

#### 👨‍🏭 作者

> just one student for javaEE,like to study some technologies

- [Github](https://github.com/yan123zi)

#### 📝 License

[MIT](https://github.com/yan123zi/qqMusicApi/blob/master/LICENSE)

Copyright (c) 2019 [yan123zi](https://github.com/yan123zi).