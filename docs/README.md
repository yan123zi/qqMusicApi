<h2 align="center" id="qqmusicapi">QQ Music API</h2>

!> QQ音乐API koa2 版本, 通过Web网页版请求QQ音乐接口数据, 有问题请提 [issue](https://github.com/yan123zi/qqMusicApi/issues), 或者你有其他想法欢迎`PR`.

## API结构图

![qq-music](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/qqmusicapi.PNG)

## API接口

!> koa2 接口说明(参数, 地址, 效果图)

### 获取歌单所有分类

接口说明: 调用此接口, 可获取歌单分类, 包含`category`信息

接口地址: `/playList/allCategories`

调用例子: `/playList/allCategories`

<details>
    <summary>SortId</summary>
    
        sortId: 1, sortName: 默认
        sortId: 2, sortName: 最新
        sortId: 3, sortName: 最热
        sortId: 4, sortName: 评分
        sortId: 5, sortName: none
</details>

**歌单分类(categoryId & categoryName)**
<details>
  <summary>1. 热门</summary>

    1.1
      "categoryId": 10000000,
      "categoryName": 全部,
</details>

<details>
  <summary>2. 语种</summary>
  
    2.1
      "categoryId": 167,
      "categoryName": "英语",
    2.2
      "categoryId": 168,
      "categoryName": "韩语",
    2.3
      "categoryId": 166,
      "categoryName": "粤语",
    2.4
      "categoryId": 169,
      "categoryName": "日语",
    2.5
      "categoryId": 170,
      "categoryName": "小语种",
    2.6
      "categoryId": 203,
      "categoryName": "闽南语",
    2.7
      "categoryId": 204,
      "categoryName": "法语",
    2.8
      "categoryId": 205,
      "categoryName": "拉丁语",
</details>

<details>
  <summary>3. 流派</summary>

    3.1
      "categoryId": 6,
      "categoryName": "流行",
    3.2
      "categoryId": 15,
      "categoryName": "轻音乐",
    3.3
      "categoryId": 11,
      "categoryName": "摇滚",
    3.4
      "categoryId": 28,
      "categoryName": "民谣",
    3.5
      "categoryId": 8,
      "categoryName": "R&B",
    3.6
      "categoryId": 153,
      "categoryName": "嘻哈",
    3.7
      "categoryId": 24,
      "categoryName": "电子",
    3.8
      "categoryId": 27,
      "categoryName": "古典",
    3.9
      "categoryId": 18,
      "categoryName": "乡村",
    3.10
      "categoryId": 22,
      "categoryName": "蓝调",
    3.11
      "categoryId": 21,
      "categoryName": "爵士",
    3.12
      "categoryId": 164,
      "categoryName": "新世纪",
    3.13
      "categoryId": 25,
      "categoryName": "拉丁",
    3.14
      "categoryId": 218,
      "categoryName": "后摇",
    3.15
      "categoryId": 219,
      "categoryName": "中国传统",
    3.16
      "categoryId": 220,
      "categoryName": "世界音乐",
</details>

<details>
  <summary>4. 主题</summary>

    4.1
      "categoryId": 39,
      "categoryName": "ACG",
    4.2
      "categoryId": 136,
      "categoryName": "经典",
    4.3
      "categoryId": 146,
      "categoryName": "网络歌曲",
    4.4
      "categoryId": 133,
      "categoryName": "影视",
    4.5
      "categoryId": 141,
      "categoryName": "KTV热歌",
    4.6
      "categoryId": 131,
      "categoryName": "儿歌",
    4.7
      "categoryId": 145,
      "categoryName": "中国风",
    4.8
      "categoryId": 194,
      "categoryName": "古风",
    4.9
      "categoryId": 148,
      "categoryName": "情歌",
    4.10
      "categoryId": 196,
      "categoryName": "城市",
    4.11
      "categoryId": 197,
      "categoryName": "现场音乐",
    4.12
      "categoryId": 199,
      "categoryName": "背景音乐",
    4.13
      "categoryId": 200,
      "categoryName": "佛教音乐",
    4.14
      "categoryId": 201,
      "categoryName": "UP主",
    4.15
      "categoryId": 202,
      "categoryName": "乐器",
    4.16
      "categoryId": 14,
      "categoryName": "DJ",
</details>

<details>
  <summary>5. 心情</summary>

    5.1
      "categoryId": 52,
      "categoryName": "伤感",
    5.2
      "categoryId": 122,
      "categoryName": "安静",
    5.3
      "categoryId": 117,
      "categoryName": "快乐",
    5.4
      "categoryId": 116,
      "categoryName": "治愈",
    5.5
      "categoryId": 125,
      "categoryName": "励志",
    5.6
      "categoryId": 59,
      "categoryName": "甜蜜",
    5.7
      "categoryId": 55,
      "categoryName": "寂寞",
    5.8
      "categoryId": 126,
      "categoryName": "宣泄",
    5.9
      "categoryId": 68,
      "categoryName": "思念",
</details>

<details>
  <summary>6. 场景</summary>

    6.1
      "categoryId": 78,
      "categoryName": "睡前",
    6.2
      "categoryId": 102,
      "categoryName": "夜店",
    6.3
      "categoryId": 101,
      "categoryName": "学习",
    6.4
      "categoryId": 99,
      "categoryName": "运动",
    6.5
      "categoryId": 99,
      "categoryName": "运动",
    6.6
      "categoryId": 76,
      "categoryName": "约会",
    6.7
      "categoryId": 94,
      "categoryName": "工作",
    6.8
      "categoryId": 81,
      "categoryName": "旅行",
    6.9
      "categoryId": 103,
      "categoryName": "派对",
    6.10
      "categoryId": 222,
      "categoryName": "婚礼",
    6.11
      "categoryId": 223,
      "categoryName": "咖啡馆",
    6.12
      "categoryId": 224,
      "categoryName": "跳舞",
    6.13
      "categoryId": 16,
      "categoryName": "校园",
</details>

示例截图:

![获取歌单分类](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/playListCategories.png)

### 获取歌单列表

接口说明：调用此接口，可以获得你想得到的歌单列表

参数列表：

- 必选参数

`categoryId`：类别`id`，默认是10000000

- 可选参数

`limit`：每次取出的歌单数量，默认是19

`offset`：偏移量，默认是0

`sortId`：排序id：2:最新 5:推荐，默认是5

接口地址：`/playList/:categoryId`

调用例子：`/playList/10000000 || /playList?categoryId=10000000`

实例截图：

**获取歌单列表**

![通过分类获取歌单列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/playListByCategory.png)

**获取歌单列表-带参数**

![通过分类获取歌单列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/playListByCategoryWithParams.png)

### 获取歌单详情

接口说明：调用此接口，可以获得歌单的详情

参数列表：

- 必选参数

`id`：歌单的id

接口地址：`/playListDetails/:id`

调用例子：`/playListDetails/6375131889`

实例截图：

**获取歌单详情**

![获取歌单详情](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/playListDetails.png)

### 获取歌曲的链接

接口说明：调用该接口，可以获得歌曲的vkey，歌曲外链和一些其它参数

参数列表：

- 必选参数

`id`：歌曲的id

接口地址：`/songUrl/:id`

调用例子：`/songUrl/001Xn6C50lvtLc`

实例截图：

**获取歌曲的链接**

![获取歌曲的链接](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/songUrl.png)

### 获取歌曲的歌词

接口说明：调用该接口，可以获得歌曲的歌词

参数列表：

- 必选参数

`id`：歌曲的id

接口地址：`/songLyric/:id`

调用例子：`/songLyric/231745979`

实例截图：

**获取歌曲的歌词**

![获取歌曲的歌词](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/songLyric.png)

### 获取歌曲的详情

接口说明：调用该接口，可以获得歌曲的详情

参数列表：

- 必选参数

`id`：歌曲的id

接口地址：`/songDetails/:id`

调用例子：`/songDetails/0035KWhu1mizlY`

实例截图：

**获取歌曲的详情**

![获取歌曲的详情](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/playListDetails.png)

### 获取歌曲的相关mv

接口说明：调用该接口，可以获得歌曲的相关的mv

参数列表：

- 必选参数

`id`：歌曲的id

接口地址：`/songRelateMv/:id`

调用例子：`/songRelateMv/0020VnHM0U9uNh`

实例截图：

**获取歌曲的相关mv**

![获取歌曲的相关mv](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/songMv.png)

### 获取歌曲的相关热门歌单

接口说明：调用该接口，可以获得歌曲的相关的热门歌单

参数列表：

- 必选参数

`id`：歌曲的id

接口地址：`/songRelatePlayList/:id`

调用例子：`/songRelatePlayList/233060208`

实例截图：

**获取歌曲的相关热门歌单**

![获取歌曲的相关热门歌单](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/songRelatePlayList.png)

### 通过不同筛选规则获取mv列表

接口说明：调用该接口，使用各种条件筛选出mv列表

参数列表：

- 可选参数

`versionId`：mv的版本id，默认是7（全部）

<details>
  <summary>Version</summary>

    "version": [
      {
        "id": 7,
        "name": "全部"
      },
      {
        "id": 8,
        "name": "MV"
      },
      {
        "id": 9,
        "name": "现场"
      },
      {
        "id": 10,
        "name": "翻唱"
      },
      {
        "id": 11,
        "name": "舞蹈"
      },
      {
        "id": 12,
        "name": "影视"
      },
      {
        "id": 13,
        "name": "综艺"
      },
      {
        "id": 14,
        "name": "儿歌"
      }
    ]
</details>

`areaId`：mv的区域id，默认是15（全部）

<details>
  <summary>Area</summary>

    "area": [
      {
        "id": 15,
        "name": "全部"
      },
      {
        "id": 16,
        "name": "内地"
      },
      {
        "id": 17,
        "name": "港台"
      },
      {
        "id": 18,
        "name": "欧美"
      },
      {
        "id": 19,
        "name": "韩国"
      },
      {
        "id": 20,
        "name": "日本"
      }
    ]
</details>

`offset`：偏移量，默认是0

`limit`：每次查出的mv的数量，默认是20

接口地址：`/getMvList`

调用例子：`/getMvList`

实例截图：

**通过不同筛选规则获取mv列表**

![通过不同筛选规则获取mv列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/getMvList.png)

**通过不同筛选规则获取mv列表-带参数**

![通过不同筛选规则获取mv列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/getMvListByParams.png)

### 通过mv的标签种类获取mv列表

接口说明：通过调用此接口，可以获取不同标签种类的mv的列表

参数列表：

- 可选参数

`tag`：mv标签种类，默认是all

<details>
    <summary>tag</summary>
    
    "tag":[
        {
            tag: "all",
            name: "精选"
        },
        {
            tag: "neidi",
            name: "内地"
        },
        {
            tag: "korea",
            naem: "韩国"
        },
        {
            tag: "gangtai",
            name: "港台"
        },
        {
            tag: "oumei",
            name: "欧美"
        },
        {
            tag: "janpan",
            name: "日本"
        }
    ]
</details>

接口地址：`/getMvByTag/:tag`

调用例子：`/getMvByTag/gangtai`

实例截图：

**通过mv的标签种类获取mv列表**

![通过mv的标签种类获取mv列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/getMvListByTag.png)

### 获取mv详情

接口说明：通过调用该接口，可以获取mv的详情

参数列表：

- 必选参数：

`id`：mv的id

接口地址：`/mvDetails/:id`

调用例子：`/mvDetails/v0032zk67ui`

实例截图：

**获取mv详情**

![获取mv详情](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/mvDetails.png)

### 获取mv播放链接

接口说明：通过调用该接口，可以获取mv的播放链接

参数列表：

- 必选参数：

`id`：mv的id

接口地址：`/mvUrl/:id`

调用例子：`/mvUrl/v0032zk67ui`

实例截图：

**获取mv详情**

![获取mv播放链接](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/mvUrl.png)

### 获取主页上的推荐

接口说明：通过调用该接口，可以获取主页上所有的推荐内容

接口地址：`/getRecommend`

调用例子：`/getRecommend`

实例截图：

**获取主页上的推荐**

![获取主页上的推荐](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/Recommend.png)

### 获取各种分类的榜单列表

接口说明：通过调用该接口，可以qq音乐各种排行榜的榜单列表

参数列表：

- 必选参数：

`id`：榜单的id

<details>
    <summary>topListId</summary>
    
    "id":[
        "巅峰榜": [
            {
                id: 4,
                name: "流行指数榜"
            },
            {
                id: 26,
                name: "热歌榜"
            },
            {
                id: 27,
                name: "新歌榜"
            },
            {
                id: 62,
                name: "飙升榜"
            },
            {
                id: 67,
                name: "听歌识曲榜"
            },
            {
                id: 4,
                name: "流行指数榜"
            }，
            {
                name: "mv榜（通过调用`/mvRank`获取）"
            }
        ],
        "地区榜":[
            {
                id: 5,
                name: "内地榜"
            },
            {
                id: 59,
                name: "香港地区"
            },
            {
                id: 61,
                name: "台湾地区"
            },
            {
                id: 3,
                name: "欧美榜"
            },
            {
                id: 16,
                name: "韩国榜"
            },
            {
                id: 17,
                name: "日本榜"
            },
        ],
        "特色榜":[
            {
                id: 60,
                name: "抖音排行榜"
            },
            {
                id: 28,
                name: "网络歌曲榜"
            },
            {
                id: 57,
                name: "电音榜"
            },
            {
                id: 66,
                name: "ACG新歌榜"
            },
            {
                id: 65,
                name: "国风热歌榜"
            },
            {
                id: 64,
                name: "综艺新歌榜"
            },
            {
                id: 29,
                name: "影视金曲榜"
            },
            {
                id: 52,
                name: "腾讯音乐人原创榜"
            },
            {
                id: 36,
                name: "k歌金曲榜"
            },
            {
                id: 58,
                name: "说唱榜"
            },
        ]
    ]
</details>

- 可选参数：

`offset`：分页的偏移量，默认值是0

`limit`：每页显示的数量，默认值是20

接口地址：`/topList/:id`

调用例子：`/topList/26`

实例截图：

**获取各种分类的榜单列表**

![获取各种分类的榜单列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/topList.png)

**获取各种分类的榜单列表-带参数**

![获取各种分类的榜单列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/topListWithParam.png)

### 获取新专辑列表

接口说明：调用该接口，可以获取最新专辑列表（按分类）

参数列表：

- 必选参数：

`id`：专辑列表种类id

<details>
    <summary>id</summary>
    
    "id":[
        {
            id: 1,
            name: "内地"
        },
        {
            id: 2,
            name: "港台"
        },
        {
            id: 3,
            name: "欧美"
        },
        {
            id: 4,
            name: "韩国"
        },
        {
            id: 5,
            name: "日本"
        },
        {
            id: 6,
            name: "其它"
        }
    ]
</details>

- 可选参数：

`limit`：每次查询出的数量，默认值是20

`offset`：分页的偏移量，默认值是0

接口地址：`/albumList/:id`

调用例子：`/albumList/1`

**获取新专辑列表**

![获取新专辑列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/albumList.png)

**获取新专辑列表-带参数**

![获取新专辑列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/albumListWithParam.png)

### 获取专辑详情

接口说明：调用此接口，可以获得专辑的详细信息

参数列表：

- 必选参数：

`id`：专辑的id

接口地址：`/albumDetails`

调用例子：`/albumDetails/003mvZ8M1fCuPp`

**获取专辑详情**

![获取专辑详情](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/albumDetails.png)

### 获取专辑内歌曲列表

接口说明：调用此接口，可以获得专辑的歌曲列表

参数列表：

- 必选参数：

`id`：专辑的id

接口地址：`/albumSongList`

调用例子：`/albumSongList/003mvZ8M1fCuPp`

**获取专辑内歌曲列表**

![获取专辑内歌曲列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/albumSongList.png)

### 获取热门搜索的关键字

接口说明：调用此接口，可以获得当前热门的搜索关键字

接口地址：`/hotKeySearch`

调用例子：`/hotKeySearch`

**获取热门搜索的关键字**

![获取热门搜索的关键字](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/hotKeySearch.png)

### 获取异步的搜索提示

接口说明：调用此接口，可以获得搜索输入框中的异步提示

参数列表：

- 必选参数：

`key`：异步搜索的关键字

接口地址：`/smallSow/:key`

调用例子：`/smallSow/芒种`

**获取异步的搜索提示**

![获取异步的搜索提示](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/smallShow.png)

### 搜索关键字

接口说明：调用此接口，可以获得搜索输入框中的异步提示

参数列表：

- 必选参数：

`key`：搜索的关键字

- 可选参数：

`limit`：每页显示的数量，默认值是10

`page`：页码，默认值是1

`type`：搜索的类型，默认是song

<details>
    <summary>type</summary>
    
    "type":[
        {
            type: "song",
            name: "歌曲"
        },
        {
            type: "album",
            name: "专辑"
        },
        {
            type: "mv",
            name: "mv"
        },
        {
            type: "lyric",
            name: "歌词"
        },
    ]
</details>

接口地址：`/searchKey/:id`

调用例子：`/searchKey/芒种`

**搜索关键字**

![搜索关键字](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/searchKey.png)

**搜索关键字-带参数**

![搜索关键字-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/searchKeyWithParam.png)

### 获取歌手列表

接口说明：调用此接口，可以获得歌手的列表

参数列表：

- 可选参数：

`limit`：每页显示的数量，默认值是10

`page`：页码，默认值是1

`area`：歌手所在的地区，默认是-100（全部）

<details>
    <summary>area</summary>
    
    "area":[
        {
            area: -100,
            name: "全部"
        },
        {
            area: 200,
            name: "内地"
        },
        {
            area: 2,
            name: "港台"
        },
        {
            area: 3,
            name: "韩国"
        },
        {
            area: 4,
            name: "日本"
        },
        {
            area: 5,
            name: "欧美"
        },
        {
            area: 6,
            name: "其它"
        }
    ]
</details>

`sex`：歌手的性别，默认是-100（全部）

<details>
    <summary>sex</summary>
    
    "sex":[
        {
            sex: -100,
            name: "全部"
        },
        {
            sex: 0,
            name: "男"
        },
        {
            sex: 1,
            name: "女"
        },
        {
            sex: 2,
            name: "组合"
        }
    ]
</details>

`genre`：歌手类别，默认是-100（全部）

<details>
    <summary>genre</summary>
    
    "genre":[
        {
            genre: -100,
            name: "全部"
        },
        {
            genre: 1,
            name: "流行"
        },
        {
            genre: 2,
            name: "摇滚"
        },
        {
            genre: 3,
            name: "民谣"
        },
        {
            genre: 4,
            name: "电子"
        },
        {
            genre: 5,
            name: "爵士"
        },
        {
            genre: 6,
            name: "嘻哈"
        },
        {
            genre: 8,
            name: "R&B"
        }，
        {
            genre: 9,
            name: "轻音乐"
        }，
        {
            genre: 10,
            name: "民歌"
        }，
        {
            genre: 14,
            name: "古典"
        },
        {
            genre: 20,
            name: "蓝调"
        },
        {
            genre: 25,
            name: "乡村"
        }
    ]
</details>

`index`：歌手按名称查找，默认是-100（全部），值由A-Z从1到26，最后一个值#为27

接口地址：`/singerList`

调用例子：`/singerList`

**获取歌手列表**

![获取歌手列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/searchKey.png)

**获取歌手列表-带参数**

![获取歌手列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerListWithParam.png)

### 获取歌手的详细信息

接口说明：调用此接口，可以获得歌手的详细信息

参数列表：

- 必选参数：

`id`：歌手的id

接口地址：`/singerDetails/:id`

调用例子：`/singerDetails/002azErJ0UcDN6`

**获取歌手的详细信息**

![获取歌手的详细信息](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerDetails.png)

### 获取歌手的歌曲列表

接口说明：调用此接口，可以获得歌手的歌曲列表

参数列表：

- 必选参数：

`id`：歌手的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是10

`offset`：分页的偏移量，默认值是0

接口地址：`/singerSongList/:id`

调用例子：`/singerSongList/002azErJ0UcDN6`

**获取歌手的歌曲列表**

![获取歌手的歌曲列表](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerSongList.png)

**获取歌手的歌曲列表-带参数**

![获取歌手的歌曲列表-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerSongListWithParam.png)

### 获取歌手的所有专辑

接口说明：调用此接口，可以获得歌手的所有专辑

参数列表：

- 必选参数：

`id`：歌手的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是10

`offset`：分页的偏移量，默认值是0

接口地址：`/singerAlbums/:id`

调用例子：`/singerAlbums/002azErJ0UcDN6`

**获取歌手的所有专辑**

![获取歌手的所有专辑](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerAlbums.png)

**获取歌手的所有专辑-带参数**

![获取歌手的所有专辑-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerAlbumsWithParam.png)

### 获取歌手的所有mv

接口说明：调用此接口，可以获得歌手的所有mv

参数列表：

- 必选参数：

`id`：歌手的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是5

`offset`：分页的偏移量，默认值是0

接口地址：`/singerMvs/:id`

调用例子：`/singerMvs/002azErJ0UcDN6`

**获取歌手的所有mv**

![获取歌手的所有mv](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerMvs.png)

**获取歌手的所有mv-带参数**

![获取歌手的所有mv-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerMVsWithParam.png)

### 获取歌手的粉丝上传内容

接口说明：调用此接口，可以获得歌手的粉丝上传的内容

参数列表：

- 必选参数：

`id`：歌手的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是5

`offset`：分页的偏移量，默认值是0

接口地址：`/singerFunsUp/:id`

调用例子：`/singerFunsUp/002azErJ0UcDN6`

**获取歌手的粉丝上传内容**

![获取歌手的粉丝上传内容](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerFunsUp.png)

**获取歌手的粉丝上传内容-带参数**

![获取歌手的粉丝上传内容-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/singerFunsUpWithParam.png)

### 获取歌手的相似歌手

接口说明：调用此接口，可以获得歌手的相似歌手

参数列表：

- 必选参数：

`id`：歌手的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是5

`offset`：分页的偏移量，默认值是0

接口地址：`/similarSingers/:id`

调用例子：`/similarSingers/002azErJ0UcDN6`

**获取歌手的相似歌手**

![获取歌手的相似歌手](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/similarSingers.png)

**获取歌手的相似歌手-带参数**

![获取歌手的相似歌手-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/similarSingersWithParam.png)

### 获取歌单，专辑，歌曲的评论

接口说明：调用此接口，可以获得歌单，专辑，歌曲的评论
{2,3}歌单的评论{2,4}排行榜的评论{2,2}专辑的评论，{2,5}mv的评论,{2,1}歌曲的评论
参数列表：

- 必选参数：

`id`：歌单，专辑，歌曲或mv的id

- 可选参数：

`limit`：每页显示的歌曲数量，默认值是25

`offset`：分页的偏移量，默认值是0

`reqtype`：默认值是2

`biztype`：默认值是3

<details>
    <summary>{reqtype,biztype}</summary>
    
    "{reqtype,biztype}":[
        {
            {2,1}："歌曲的评论"
        },
        {
            {2,2}："专辑的评论"
        },
        {
            {2,3}："歌单的评论"
        },
        {
            {2,4}："排行榜的评论"
        },
        {
            {2,5}："mv的评论"
        }
    ]
</details>

接口地址：`/Comments/:id`

调用例子：`/Comments/6999230203`

**获取歌单，专辑，歌曲的评论**

![获取歌单，专辑，歌曲的评论](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/similarSingers.png)

**获取歌单，专辑，歌曲的评论-带参数**

![获取歌单，专辑，歌曲的评论-带参数](https://raw.githubusercontent.com/yan123zi/testdoc/master/screenshot/commontsWithParam.png)