<template>
    <div class="body">
        <!-- 首页内容 -->
        <div class="publicity">
            <!-- 喇叭 -->
            <div class="trumpet">
                <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/ico_news.png" class="" />
                <swiper ref="mySwiper" :options="swiperTrumpet" class="swiper-no-swiping">
                    <swiper-slide class="swiper_trumpet" v-for="(item, index) in trumpet" :key="index">
                        <p>{{ item }}</p>
                    </swiper-slide>
                </swiper>
                <!-- <ul>
                    <li v-for="(item,index) in trumpet" :key="index">
                        <p>{{ item }}</p>
                    </li>
                </ul> -->
                
            </div>
            <!-- 内容 -->
            <ul>
                <li>
                <img
                    src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/quick%20entry_icon_reward.png"
                    class=""
                />
                <p>任务赏金</p>
                </li>
                <li>
                <img
                    src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/quick%20entry_icon_zhjy.png"
                    class=""
                />
                <p>账号交易</p>
                </li>
                <li>
                <img
                    src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/quick%20entry_icon_zxk.png"
                    class=""
                />
                <p>尊享卡</p>
                </li>
            </ul>
        </div>
        <!-- swiper 轮播 -->
        <div class="recommends">
            <h5>精品游戏推荐</h5>
            <!-- Swiper -->
            <!-- <div class="swiper_box" v-for="(item,index) in swiper" :key="index">
                <div class="swiper_img">
                    <img :src="item.src" class="">
                </div>
                <p class="swiper_title">
                    {{item.title}}
                </p>
                <span class="swiper_classify">
                    {{item.classify}}
                </span>
            </div> -->

        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide
                class="swiper_box"
                v-for="(item, index) in swiper"
                :key="index"
            >
                <div class="swiper_img">
                    <img :src="item.src" class="" />
                </div>
                <p class="swiper_title">
                    {{ item.title }}
                </p>
                <span class="swiper_classify">
                    {{ item.classify }}
                </span>
            </swiper-slide>
        </swiper>
        </div>
        <!-- 列表 -->
        <div class="game-list">
            <!-- 按钮 -->
            <div class="btn_box">
                <p class="hot active">人气热门</p><p class="newest">最新上架</p>
            </div>
            <!-- 游戏列表 -->
            <div class="list_box">
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <div class="details">
                            <div class="imgbox_left">
                                <img :src="item.img" class="" />
                            </div>
                            <div class="con_center">
                                <p>{{item.title}}</p>
                                <div class="con_center_cen">
                                    <span>{{item.occupation}}</span>
                                    <span class="con_center_one">|</span>
                                    <span class="con_center_num">{{item.download}} </span> 人下载
                                    <span class="con_center_one">|</span>
                                    <span>{{item.size}}</span>
                                </div>
                                <div class="con_center_bottom">
                                    <span class="con_occupation2">{{item.occupation2}}</span>
                                    <span class="con_playing">{{item.playing}}</span>
                                    <span class="con_introduce">{{item.introduce}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="download_right">下载</div>
                    </li>
                    
                </ul>
            </div>
            <!-- 最新推荐 -->
            <div class="newest">
                <ul>
                    <li class="newest_XinYou">
                        <div class="newest_one">
                            <div class="newest_one_img">
                                <img src="https://55kyx.55k.cn/site/20220226/e1c7ce3c1fc5decd785fbb77cf9d9508.jpg" alt="">
                            </div>
                            <div class="newest_one_btn">
                                <button class="">热游推荐</button>
                                <span class="">完美冰火之篆</span>
                            </div>
                        </div>
                    </li>
                    <li class="newest_list">
                        <div class="details">
                            <div class="imgbox_left">
                                <img src="https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif" class="">
                            </div>
                            <div class="con_center">
                                <p>完美冰火之篆</p>
                                <div class="con_center_cen">
                                    <span>单职业</span>
                                    <span class="con_center_one">|</span>
                                    <span class="con_center_num">1447 </span> 人下载
                                    <span class="con_center_one">|</span>
                                    <span>85.89MB</span>
                                </div>
                                <div class="con_center_bottom">
                                    <span class="con_occupation2">单职业</span>
                                    <span class="con_playing">玩法新颖</span>
                                    <span class="con_introduce">冰火碰撞</span>
                                </div>
                            </div>
                        </div>
                        <div class="download_right">下载</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 活动公告 -->
        <div class="activity">
            <div class="activity_nav">
                <div>
                    <span class="activity_text"><b>活动公告</b></span>
                </div>
                <div>
                    <span class="activity_jump">全部 &nbsp;></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,index) in activity" :key="index">
                    <div class="activity_imgbox">
                        <img :src="item.src" class="activity_img">
                    </div>
                    <div class="activity_right">
                        <p class="activity_title">{{item.title}}</p>
                        <p class="activity_deta">{{item.deta}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 更多好玩游戏 -->
        <div class="more">
            <div class="more_nav">
                <div>
                    <span class="more_text"><b>更多好玩游戏</b></span>
                </div>
                <div>
                    <span class="more_jump">全部 &nbsp;></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,index) in moreGame" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // swiper配置
            swiperOptions: {
                // pagination: {
                
                // },
                slidesPerView : 'auto',//根据slide的宽度自动调整展示数量。此时需要设置slide的宽度
                // Some Swiper option/callback...
            },
            // 喇叭轮播配置
            swiperTrumpet: {
                direction: "vertical",//垂直
                loop : true,//循环
                autoplay: {
                    delay: 1000,//自动循环间隔时间
                    stopOnLastSlide: false,//true:自动切换停在最后一个
                    disableOnInteraction: false,// 禁止触摸
                },
            },

            // 喇叭数据
            trumpet: [
            "傲天冰雪全网首推 天生热血不服来战1",
            "傲天冰雪全网首推 天生热血不服来战2",
            "傲天冰雪全网首推 天生热血不服来战3",
            "傲天冰雪全网首推 天生热血不服来战4",
            "傲天冰雪全网首推 天生热血不服来战5",
            "傲天冰雪全网首推 天生热血不服来战6",
            "傲天冰雪全网首推 天生热血不服来战7",
            "傲天冰雪全网首推 天生热血不服来战8",
            "傲天冰雪全网首推 天生热血不服来战9"
            ],
            // 轮播图数据
            swiper:[
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业1'
                },
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业2'
                },
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业3'
                },
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业4'
                },
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业5'
                },
                {
                    src:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    title:'完美冰火之篆',
                    classify:'单职业6'
                }
            ],

            // 游戏列表
            list:[
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
                {
                    // 图片路径
                    img:'https://55kyx.55k.cn/game/20220222/8dfdba47e3ab509cf2603df473cc7b6b.gif',
                    // 标题
                    title:'完美冰火之篆',
                    // 职业
                    occupation:'单职业',
                    // 下载人数
                    download:'1447',
                    // 内存
                    size:'85.89MB',
                    // 职业2
                    occupation2:'单职业',
                    // 玩法
                    playing:'玩法新颖',
                    // 介绍
                    introduce:'冰火碰撞'
                },
            ],

            // 新游推荐
            newest:[
                {
                    src:'',

                }
            ],

            // 活动公告
            activity:[
                {
                    src:'https://55kyx.55k.cn/site/20220226/cde283412ff6338c438d69f15d915fba.jpg',
                    title:'（评论有奖）完美冰火之篆 震撼来袭！白嫖就是这么简单！',
                    deta:'02-26 16:11',
                },
                {
                    src:'https://55kyx.55k.cn/site/20220226/cde283412ff6338c438d69f15d915fba.jpg',
                    title:'（评论有奖）完美冰火之篆 震撼来袭！白嫖就是这么简单！2222111sadassadasdassda',
                    deta:'02-26 16:11',
                },
                {
                    src:'https://55kyx.55k.cn/site/20220226/cde283412ff6338c438d69f15d915fba.jpg',
                    title:'（评论有奖）完美冰火之篆 震撼来袭！白嫖就是这么简单！',
                    deta:'02-26 16:11',
                },
                {
                    src:'https://55kyx.55k.cn/site/20220226/cde283412ff6338c438d69f15d915fba.jpg',
                    title:'（评论有奖）完美冰火之篆 震撼来袭！白嫖就是这么简单！',
                    deta:'02-26 16:11',
                }
            ],

            // 更多好玩游戏
            moreGame :[
                '单职业',
                '火龙',
                1.76,
                '合击',
                '冰雪',
                '三职业',
                '沉默',
                '1.80'
            ],
        }
    }
}
</script>

<style lang="less" scoped>
.body {
// 背景色
background-color: rgb(243, 243, 243);
font: 14px '微软雅黑',Tahoma,Verdana,Arial,'宋体',sans-serif;
    // 首页内容
    .publicity {
        width: 100vw;
        padding-bottom: 15px;
        background: #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        // 喇叭
        .trumpet {
            width: 80vw;
            margin: 0 auto;
            margin-top: 22vw;
            height: 20px;
            border-radius: 20px;
            background: rgb(240, 239, 239);
            display: flex;
            img {
                width: 3.7vw;
                height: 3.1vw;
                margin-top: 0.8vw;
                margin-left: 1vw;
            }
            .swiper_trumpet {
                width: 73vw;
                height: 6vw;
                p {
                    width: 100%;
                    font-size: 3.3vw;
                    line-height: 20px;
                    margin: 0;
                    margin-left: 5px;
                    color: rgb(255, 55, 54) !important;
                }
            }
        }
        // 内容
        >ul {
            display: flex;
            width: 100vw;
            justify-content: center;
            margin: 0 auto;
            margin-top: 10px;
            li {
                list-style: none;
                display: flex;
                flex-grow: 1;
                align-items: center;
                flex-direction: column;
                img {
                    width: 50px;
                    height: 50px;
                }
                p {
                    margin-top: 10px;
                    font-size: 14px;
                }
            }
        }
    }
    // swiper轮播
    .recommends {
        width: 100vw;
        margin-top: 15px;
        background-color: #fff;
        padding-bottom: 3vw;
        h5 {
            margin-top: 1vw;
            text-align: center;
            font-weight: bold;
            color: #222;
            font-size: 4.5vw;
            margin-bottom: 4vw;
            box-sizing: border-box;
        }
        .swiper_box {
            height: 31vw;
            box-shadow: 0px 0px 4px 1px rgb(204 204 223 / 50%);
            border-radius: 2vw;
            overflow: hidden;
            color: #333333;
            font-size: 2.5vw;
            text-align: center;
            margin-left: 3.5%;
            width: 25% !important;
            .swiper_img {
                width: 15.42vw;
                height: 15.42vw;
                margin: 2vw auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .swiper_title {
                width: 95%;
                font-size: 2.9vw;
                padding: 0 2.5%;
            }
            .swiper_classify {
                display: block;
                color: #999999;
                box-shadow: none;
                border: 1px solid #F0EFEF;
                background-color: #F0EFEF;
                border-radius: 3vw;
                width: 16vw;
                height: 4.8vw;
                margin: 0 auto;
                margin-top: 1vw;
                line-height: 4.8vw;
                font-size: 2.7vw;
            }
        }
    }
    // 游戏列表
    .game-list {
        background-color: #fff;
        margin-top: 10px;
        .btn_box {
            font-size: 14px;
            padding-top: 2.5vw;
            padding-bottom: 3.5vw;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 100vw;
            height: 5vw;
            p {
                width: 21vw;
                height: 6.8vw;
                border-radius: 15px;
                border: 1px solid rgba(214, 214, 214, 1);
                float: left;
                text-align:center;
                line-height: 6.8vw;
                color: #666;
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(214, 214, 214, 1);
                font-size: 3.5vw;
                margin-left: 3vw;
            }
            .active {
                background-color: #018FFF!important;
                color: #FEFEFE!important;
                border-color: #018FFF!important;
            }
        }
        .list_box {
            ul {

                li {
                    width: 100vw;
                    display: flex;
                    padding-top: 12px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgba(237, 238, 239, 1);
                    .details {
                        display: flex;
                        .imgbox_left {
                            width: 18vw;
                            height: 18vw;
                            margin: 0px 10px 10px 12px;
                            img {
                                width: 18vw;
                                height: 18vw;

                            }
                        }
                        .con_center {
                            width: 55vw;
                            >p {
                                font-weight: bold;
                                color: #222;
                                font-size: 3.5vw;
                                margin-bottom: 0.9vw;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                                margin-top: 1.5vw;
                            }
                            .con_center_cen {
                                font-size: 2.5vw;
                                color: #999;
                                .con_center_one {
                                    margin: 0 1.2vw;
                                }
                                .con_center_num {
                                    color: #018FFF!important;
                                }
                            }
                            .con_center_bottom {
                                margin-top: 0.9vw;
                                span {
                                    height: 3.5vw;
                                    line-height: 3.5vw;
                                    font-size: 2.5vw;
                                    color: #fff;
                                    padding: 0 4px;
                                    -webkit-box-sizing: border-box;
                                    -moz-box-sizing: border-box;
                                    box-sizing: border-box;
                                    border-radius: 4px;
                                    margin-right: 4px;
                                }
                                .con_occupation2 {
                                    background-color: #72B9F0;;
                                }
                                .con_playing {
                                    background-color: #FDC36A;
                                }
                                .con_introduce {
                                    background-color: #EF918E;
                                }
                            }
                        }
                    }
                    .download_right {
                        width: 9.5vw;
                        height: 9.5vw;
                        border-radius: 50%;
                        border: 1px solid #018FFF;
                        color: #018FFF;
                        line-height: 9.5vw;
                        text-align: center;
                        margin-top: 4vw;
                        margin-left: 4vw;
                        font-size: 3vw;
                    }
                }
            }
        }
        .newest {
            ul {
                .newest_XinYou {
                    padding-bottom: 15px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgba(237, 238, 239, 1);
                    .newest_one {
                        .newest_one_img {
                            width: 94%;
                            margin-left: 3%;
                            margin-top: 2vw;
                            img {
                                width: 100%;
                                height: 38vw;
                            }
                        }
                        .newest_one_btn {
                            width: 94%;
                            margin-left: 3%;
                            margin-top: 2vw;
                            button {
                                    color: #D5B003;
                                    border: 1px solid #D5B003;
                                    font-size: 2.5vw;
                                    height: 5vw;
                                    border-radius: 4px;
                                    padding: 0 4px;
                                    -webkit-box-sizing: border-box;
                                    -moz-box-sizing: border-box;
                                    box-sizing: border-box;
                                    background-color: #fff;
                            }
                            span {
                                display: inline-block;
                                width: 70%;
                                height: 6vw;
                                margin-left: 3vw;
                                font-size: 3.5vw;
                                line-height: 6vw;
                            }
                        }
                    }
                }
                .newest_list {
                    width: 100vw;
                    display: flex;
                    padding-top: 12px;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgba(237, 238, 239, 1);
                    .details {
                        display: flex;
                        .imgbox_left {
                            width: 18vw;
                            height: 18vw;
                            margin: 0px 10px 10px 12px;
                            img {
                                width: 18vw;
                                height: 18vw;

                            }
                        }
                        .con_center {
                            width: 55vw;
                            >p {
                                font-weight: bold;
                                color: #222;
                                font-size: 3.5vw;
                                margin-bottom: 0.9vw;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                                margin-top: 1.5vw;
                            }
                            .con_center_cen {
                                font-size: 12px;
                                color: #999;
                                .con_center_one {
                                    margin: 0 1.2vw;
                                }
                                .con_center_num {
                                    color: #018FFF!important;
                                }
                            }
                            .con_center_bottom {
                                margin-top: 0.9vw;
                                span {
                                    height: 3.5vw;
                                    line-height: 3.5vw;
                                    font-size: 12px;
                                    color: #fff;
                                    padding: 0 4px;
                                    -webkit-box-sizing: border-box;
                                    -moz-box-sizing: border-box;
                                    box-sizing: border-box;
                                    border-radius: 4px;
                                    margin-right: 4px;
                                }
                                .con_occupation2 {
                                    background-color: #72B9F0;;
                                }
                                .con_playing {
                                    background-color: #FDC36A;
                                }
                                .con_introduce {
                                    background-color: #EF918E;
                                }
                            }
                        }
                    }
                    .download_right {
                        width: 9.5vw;
                        height: 9.5vw;
                        border-radius: 50%;
                        border: 1px solid #018FFF;
                        color: #018FFF;
                        line-height: 9.5vw;
                        text-align: center;
                        margin-top: 4vw;
                        margin-left: 4vw;
                    }
                }
            }
        }
    }
    // 活动公告
    .activity {
        margin-top: 10px;
        background-color: #fff;
        padding: 15px 10px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        .activity_nav {
            display: flex;
            >div {
                width: 50%;
                .activity_text {
                    font-size: 3.8vw;
                    font-size: 900;
                    float: left;
                }
                .activity_jump {
                    font-size: 2.7vw;
                    color: #999999;
                    font-weight: 400;
                    float: right;
                }
            }
        }
        ul {
            li {
                width: 100%;
                height: 21.8vw;
                display: flex;
                margin-top: 4vw;
                .activity_imgbox {
                        width: 42%;
                        height: 16.3vw;
                    .activity_img {
                        width: 100%;
                        height: 100%;
                        border-radius: 1.5vw;
                    }
                }
                .activity_right {
                    width: 75%;
                    margin-left: 4.2vw;
                    .activity_title {
                        line-height: 5.5vw;
                        font-size: 3.6vw;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; 
                        overflow:hidden;
                        /* autoprefixer: ignore next */
                        -webkit-box-orient: vertical;
                    }
                    .activity_deta {
                        color: #939393;
                        font-size: 3vw;
                        padding-top: 1.7vw;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
    // 更多好玩游戏
    .more {
        margin-top: 10px;
        background-color: #fff;
        padding: 15px 10px 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 60vw;
        .more_nav {
            display: flex;
            >div {
                width: 50%;
                .more_text {
                    font-size: 3.8vw;
                    font-size: 900;
                    float: left;
                }
                .more_jump {
                    font-size: 2.7vw;
                    color: #999999;
                    font-weight: 400;
                    float: right;
                }
            }
        }
        ul {
            // display: flex;
            margin-top: 3.2vw;
            li {
                    float: left;
                    border: 1px solid #ededed;
                    background: #fefefe;
                    border-radius: 1.2vw;
                    font-size: 3vw;
                    text-align: center;
                    padding: 7px 6px;
                    color: #666666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 10vw;
                    height: 8vw;
                    max-width: 85%;
                    max-width: 58vw;
                    max-width: 100%;
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    margin-right: 2.5vw;
                    margin-top: 2vw;
            }
        }
    }
}
</style>
