<template>
    <div class="body">
        <!-- 头部搜索框 -->
        <div class="searchFrame">
            <div class="input-border">
                <input type="text" placeholder="搜索游戏" />
                <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/nav-search.png" class="">
            </div>
            <!-- 导航菜单栏 -->
            <ul>
                <li v-for="(item,index) in homeNav" :key="index" :class="{active: isActive == index}" @click="isNav(index)">{{item}}</li>
                <!-- <li :class="{active: isActive == 1}" @click="handtourrouter">分类</li>
                <li :class="{active: isActive == 2}">开服</li>
                <li :class="{active: isActive == 3}">排行</li>
                <li :class="{active: isActive == 4}">福利</li> -->
            </ul>
        </div>
        <router-view></router-view>
        <!-- teb页 -->
        <div class="teb">
            <ul class="teb_box">
                <li @click="gamerouter">
                    <div>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_game_s.png" v-if="flag == 1" alt="">
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_game.png" v-else alt="">
                    </div>
                    <span>游戏</span>
                </li>
                <li>
                    <div>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_bag.png" alt="">
                        <!-- <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_bag_s.png" alt=""> -->
                    </div>
                    <span>礼包</span>
                </li>
                <li>
                    <div>
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/common/footer_trade@2x.png" alt="">
                    </div>
                    <span>交易</span>
                </li>
                <li>
                    <div>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_bag.png" alt="">
                        <!-- <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/common/footer_mall_s.png" alt=""> -->
                    </div>
                    <span>赚金</span>
                </li>
                <li @click="userrouter">
                    <div>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_user_n.png" v-if="flag == 5" alt=""> 
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/footer_user.png" v-else alt="">
                    </div>
                    <span>我的</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 记录在哪个teabr页
            flag:1,
            homeNav:[
                '手游',
                '分类',
                '开服',
                '排行',
                '福利',
            ],
            isActive:0,
        };
    },
    // computed: {
    //     swiper() {
    //         return this.$refs.mySwiper.swiper
    //     }
    // },
    // mounted() {
    //     this.swiper.slideTo(3, 1000, false)
    // }
    methods:{
        // tab页跳转游戏页
        gamerouter(){
            this.flag = 1;
            this.$router.push("/home");
        },
        // tab页跳转我的
        userrouter(){
            this.flag = 5;
            this.$router.push("/user");
        },
        // 分类跳转手游
        classrouter() {
            this.$router.push("/home/classify");
            document.documentElement.scrollTop = 0;
            // window.addEventListener('scroll',() => {
            //     var top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            // })
        },
        // 分类跳转分类
        handtourrouter() {
            this.$router.push("/home/handTour");
            document.documentElement.scrollTop = 0;
        },
        // 判断点选哪个分类
        isNav(val) {
            this.isActive = val;
            if(this.isActive == 0) {
                this.classrouter();
            }else if(this.isActive == 1) {
                this.handtourrouter()
            }else if(this.isActive == 2) {
                console.log('开服');
            }else if(this.isActive == 3) {
                console.log('排行');
            }else if(this.isActive == 4) {
                console.log('福利');
            }
        },
    }
};
</script>

<style lang="less" scoped>
.body {
// 背景色
background-color: rgb(243, 243, 243);
font: 14px '微软雅黑',Tahoma,Verdana,Arial,'宋体',sans-serif;
    // 头部搜索框
    .searchFrame {
        position: fixed;
        width: 100vw;
        height: 18.5vw;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 999;
        .input-border {
        position: fixed;
        width: 80vw;
        height: 6vw;
        border-radius: 6vw;
        top: 10px;
        left: 47vw;
        transform: translateX(-50%);
        background-color: rgb(240, 239, 239);
            input {
                position: fixed;
                width: 80vw;
                height: 6vw;
                top: 0;
                left: 47vw;
                transform: translateX(-50%);
                border: 1px solid transparent;
                background-color: transparent;
                font-size: 14px;
            }
            img {
                position: fixed;
                width: 3vw;
                height: 3vw;
                left: 2vw;
                top: 1.5vw;
            }
        }
        // 导航菜单栏
        ul {
            position: fixed;
            top: 12vw;
            display: flex;
            width: 80vw;
            left: 43vw;
            transform: translateX(-50%);
            justify-content: space-around;
            li {
                font-size: 16px;
                list-style: none;
                color: #333;
            }
            .active {
                font-size: 18px;
                font-weight: 800;
                border-bottom: 2px solid #08c;
            }
        }
    }
    // teb页
    .teb {
        width: 100vw;
        height: 13vw;
        // background-color: red;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        box-shadow: 0px -1px 8px 0px rgb(174 185 190 / 50%);
        ul {
            display: flex;
            width: 90.88%;
            padding: 0 4.58%;
            li {
                text-align: center;
                flex-grow: 1;
                margin-top: 0.7vw;
                img {
                    width: 6.28vw;
                    height: 6.28vw;
                }
                span {
                    font-size: 3.5vw;
                    color: #ADAEB6;
                }
            }
        }
    }
}
</style>
