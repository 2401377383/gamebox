<template>
    <div class="body">
        <!-- 头部分类 -->
        <div class="nav_classify">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide :class="{active: isActive == index}" class="swiper_box" v-for="(item, index) in navClassify" :key="index">
                    <div @click="cutpaita(index)">{{item}}</div>
                </swiper-slide>
            </swiper>
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
                            <!-- <div class="con_center_bottom">
                                <span class="con_occupation2">{{item.occupation2}}</span>
                                <span class="con_playing">{{item.playing}}</span>
                                <span class="con_introduce">{{item.introduce}}</span>
                            </div> -->
                            <div class="con_center_bottom">
                                {{item.introduce}}
                            </div>
                        </div>
                    </div>
                    <div class="download_right">下载</div>
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
            // 分类导航数据
            navClassify : [
                '全部游戏',
                '单职业',
                '火龙',
                '1.76',
                '合击',
                '冰雪',
                '三职业',
                '沉默',
                '1.80',
            ],
            // 判断排他
            isActive:0,
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
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
                    // 介绍
                    introduce: '神秘的冰火世界等你来探索！',
                },
            ],
        }
    },
    methods: {
        // 排他点击
        cutpaita(val) {
            this.isActive = val
        },
    }
}
</script>

<style lang="less" scoped>
.body {
    background-color: #fff;
    font: 14px '微软雅黑',Tahoma,Verdana,Arial,'宋体',sans-serif;
    // 头部分类
    .nav_classify {
        margin-top: 20vw;
        height: 10.48vw;
        border-top: 1px solid #EDEEEF;
        border-bottom: 1px solid #EDEEEF;
        .swiper_box {
            width: auto;
            height: 5vw;
            padding: 0 3vw;
            margin-left: 2.89vw;
            border: 1px solid transparent;
            border-radius: 3vw;
            color: #999;
            line-height: 5vw;
            margin-top: 2.4vw;
        }
        .active {
            border: 1px solid #018FFF;
            color: #018FFF;
        }
    }
    // 游戏列表
    .list_box {
        margin-bottom: 13vw;
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
                                color: #999999;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: 2.84vw;
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
}
</style>
