<template>
    <div class="body">
        <!-- 登录用户头部 -->
        <div class="user_nav">
            <!-- 用户 登录/注册 按钮 -->
            <div class="user_btn">
                <div class="user_img">
                    <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/logoo.png" alt="">
                </div>
                <p>
                    <span class="user_login" @click="login_lay()">登录</span>
                    <span class="user_shu">|</span>
                    <span class="user_register" @click="register_lay()">注册</span>
                </p>
            </div>
            <!-- vip跳转入口 -->
            <div class="user_vip">
                <div class="user_text">
                    <p class="user_block">尊享卡</p>
                    <p class="user_title">超值代金券天天领！</p>
                </div>
                <div class="user_dredge">
                    <span>
                        立即开通>> 
                    </span>
                </div>
            </div>
            <!-- 货币查看入口 -->
            <div class="user_currency">
                <div class="user_amount">
                    <ul>
                        <li>
                            <p>平台币</p>
                            <span>0.00</span>
                        </li>
                        <li>
                            <p>绑币</p>
                            <span>0.00</span>
                        </li>
                        <li>
                            <p>积分</p>
                            <span>0.00</span>
                        </li>
                    </ul>
                </div>
                <!-- vip跳转入口 -->
                <div class="user_vips">
                    <div class="user_icon"><img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/icon-huiyuan.png" alt=""> <span>VIP0</span></div>
                    <div class="user_vip2">升级领积分，专享更多福利特权 <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/vip-right.png" alt=""></div>
                </div>
            </div>
        </div>
        <!-- 玩家服务 -->
        <div class="player">
            <h5 class="player_title">玩家服务</h5>
            <div class="player_iocn">
                <ul>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/home_enter_ico_coupons.png" alt="">
                        <p>代金券</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_ico_invite.png" alt="">
                        <p>邀请奖励</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_ico_trial.png" alt="">
                        <p>试玩有奖</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_enter_ico_account.png" alt="">
                        <p>小号管理</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_enter_ico_back.png" alt="">
                        <p>我的返利</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_enter_ico_xiaoxi.png" alt="">
                        <p>消息中心</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/my_enter_ico_kefu.png" alt="">
                        <p>我的客服</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 更多服务 -->
        <div class="moreService">
            <h5 class="moreService_title">更多服务</h5>
            <div class="moreService_icon">
                <ul>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/me_icon_game.png" alt="">
                        <p>我的游戏</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/me_icon_bag.png" alt="">
                        <p>我的礼包</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/me_icon_gamelist.png" alt="">
                        <p>游戏账单</p>
                    </li>
                    <li>
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/message.png" alt="">
                        <p>投诉反馈</p>
                    </li>
                </ul>
            </div>
        </div>
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
        <!-- 手机号注册弹窗 -->
        <div class="register_lay" v-if="registerClear">
            <div class="register_tel">
                <div class="register_area">
                    <!-- 手机号 -->
                    <div class="register_cell">
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_phone.png" alt="">
                        <input type="tel" placeholder="手机号" maxlength="11" v-model="registerTelForm.tel">
                    </div>
                    <!-- 短信验证码 -->
                    <div class="register_verificationCode">
                        <div class="register_verificationCode_i">
                            <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_yanzhengma.png" alt="">
                            <input type="text" placeholder="短信验证码" v-model="registerTelForm.code">
                        </div>
                        <div class="register_verificationCode_b">
                            获取验证码
                        </div>
                    </div>
                    <!-- 密码 -->
                    <div class="register_password">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_Password.png" alt="">
                        <input type="text" placeholder="密码" minlength="6" maxlength="15" v-model="registerTelForm.password">
                    </div>
                    <!-- 确认密码 -->
                    <div class="register_password2">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_Password.png" alt="">
                        <input type="text" placeholder="确认密码" minlength="6" maxlength="15" v-model="registerTelForm.password2">
                    </div>
                    <!-- 真人验证 -->
                    <div class="register_person">

                    </div>
                    <!-- 下一步 -->
                    <div class="register_nextStep">
                        下一步
                    </div>
                    <!-- 协议 -->
                    <div class="register_consent">
                        <div class="register_consent_i" @click="registerTelForm.ok = !registerTelForm.ok">
                            <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_btn_s.png" v-if="registerTelForm.ok" alt="">
                            <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/before_check.png" v-else alt="">
                        </div>
                        <p>我已阅读并同意<span>《用户注册协议》</span> <span>隐私协议</span></p>
                    </div>
                    <!-- 普通账号注册 -->
                    <div class="register_common" @click="register_Commonc_lay">
                        普通账号注册
                    </div>
                    <!-- x 关闭 -->
                    <div class="register_clear" @click="register_cleraLay">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/common_btn_close_n.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 普通用户注册弹窗 -->
        <div class="register_common_lay" v-if="registerCommonClear">
            <div class="register_tel">
                <div class="register_area">
                    <!-- 账号 -->
                    <div class="register_cell">
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_me.png" alt="">
                        <input type="tel" placeholder="账号(6-15位字母或数字)" minlength="6" maxlength="15" v-model="registerCommonForm.accountNumber">
                    </div>
                    <!-- 密码 -->
                    <div class="register_password">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_Password.png" alt="">
                        <input type="text" placeholder="密码(6-15位字母或数字)" minlength="6" maxlength="15" v-model="registerCommonForm.password">
                    </div>
                    <!-- 确认密码 -->
                    <div class="register_password2">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_Password.png" alt="">
                        <input type="text" placeholder="确认密码" v-model="registerCommonForm.password2">
                    </div>
                    <!-- 真人验证 -->
                    <div class="register_person">

                    </div>
                    <!-- 下一步 -->
                    <div class="register_nextStep">
                        下一步
                    </div>
                    <!-- 协议 -->
                    <div class="register_consent">
                        <div class="register_consent_i" @click="registerCommonForm.ok = !registerCommonForm.ok">
                            <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_btn_s.png" v-if="registerCommonForm.ok" alt="">
                            <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/before_check.png" v-else alt="">
                        </div>
                        <p>我已阅读并同意<span>《用户注册协议》</span> <span>隐私协议</span></p>
                    </div>
                    <!-- 手机号注册注册 -->
                    <div class="register_common" @click="register_lay">
                        手机号注册
                    </div>
                    <!-- x 关闭 -->
                    <div class="register_clear" @click="register_Commonclera">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/common_btn_close_n.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 登录弹窗 -->
        <div class="login_lay" v-if="loginClear">
            <div class="register_tel">
                <div class="register_area">
                    <!-- 手机号 -->
                    <div class="register_cell">
                        <img src="https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_phone.png" alt="">
                        <input type="tel" placeholder="手机号/用户名/邮箱" minlength="6" maxlength="15" v-model="loginForm.tel">
                    </div>
                    <!-- 密码 -->
                    <div class="register_password">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/login_icon_Password.png" alt="">
                        <input type="text" placeholder="密码" minlength="6" maxlength="15" v-model="loginForm.password">
                    </div>
                    <!-- 登录 -->
                    <div class="register_nextStep">
                        登录
                    </div>
                    <!-- 普通账号注册 -->
                    <div class="register_common" @click="register_Commonc_lay">
                        <div class="register_account_number" @click="register_lay">
                            注册新账号
                        </div>
                        <div class="forget_password">
                            忘记密码？
                        </div>
                    </div>
                    <!-- x 关闭 -->
                    <div class="register_clear" @click="login_clera">
                        <img src="	https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/common_btn_close_n.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 忘记密码弹窗 -->

    </div>
</template>

<script>
export default {
    data(){
        return {
            // 记录在哪个teabr页
            flag : 5,
            
            // 手机号注册弹窗页开关
            registerClear:false,

            // 普通用户注册弹窗页开关
            registerCommonClear:false,

            // 登录弹窗页开关
            loginClear: false,

            // 记录手机号注册弹窗表单值
            registerTelForm:{
                // 手机号
                tel:'',
                // 验证码
                code:'',
                // 密码
                password:'',
                // 重复密码
                password2:'',
                // 是否真人验证
                person:false,
                // 记录是否同意用户协议
                ok:false,
            },

            // 记录普通用户注册弹窗表单值
            registerCommonForm:{
                // 账号
                accountNumber:'',
                // 密码
                password:'',
                // 重复密码
                password2:'',
                // 是否真人验证
                person:false,
                // 记录是否同意用户协议
                ok:false,
            },
            // 记录登录弹窗表单值
            loginForm:{
                // 手机号/账号/邮箱
                tel:'',
                // 密码
                password:'',
            },
        }
    },
    methods:{
        // 游戏页跳转方法
        gamerouter(){
            this.flag = 1;
            this.$router.push("/home");
        },
        // 用户页跳转方法
        userrouter(){
            this.flag = 5;
            this.$router.push("/user");
        },
        // 注册弹窗
        register_lay(){
            this.registerClear = true;
            this.registerCommonClear = false;
            this.loginClear = false;
        },
        // 登录弹窗
        login_lay(){
            this.loginClear = true;
        },
        // 关闭手机号注册弹窗 清空表单值
        register_cleraLay() {
            this.registerClear = false;
            this.registerTelForm.tel = '';
            this.registerTelForm.code = '';
            this.registerTelForm.password = '';
            this.registerTelForm.password2 = '';
            this.registerTelForm.person = false;
            this.registerTelForm.ok = false;
        },
        // 关闭普通账号注册弹窗 清空表单值
        register_Commonclera() {
            this.registerCommonClear = false;
            this.registerCommonForm.accountNumber = '';
            this.registerCommonForm.password = '';
            this.registerCommonForm.password2 = '';
            this.registerCommonForm.person = false;
            this.registerCommonForm.ok = false;
        },
        // 跳转普通账号弹窗开关
         register_Commonc_lay() {
             this.registerCommonClear = true;
             this.registerClear = false;
         },
        // 关闭登录弹窗 清空表单值
        login_clera() {
            this.loginClear = false;
            this.loginForm.tel = '';
            this.loginForm.password = '';
        },
    }
}
</script>

<style lang="less" scoped>
.body {
    // 全局配置字体 背景色
    background-color: #fff;
    font: 14px '微软雅黑',Tahoma,Verdana,Arial,'宋体',sans-serif;
    // 头部
    .user_nav {
        position: relative;
        width: 100vw;
        height: auto;
        background-repeat: no-repeat;
        background-size: 100%;
        background-image: url(https://www.55k.cn/themes/simpleboot3/mobilepublic/assets/images/me_bg.png);
        top: -1px;
        overflow: hidden;
        padding: 0 3vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        // 登录 注册
        .user_btn {
            display: flex;
            margin-top: 4.63vw;
            .user_img {
                width: 14.7vw;
                height: 14.7vw;
                border-radius: 50%;
                img {
                    width: 14.7vw;
                    height: 14.7vw;
                }
            }
            p {
                font-size: 4.3vw;
                color: #ffffff;
                font-weight: 500;
                margin-top: 3.8vw;
                margin-left: 3.7vw;
                .user_shu {
                    margin: 0 2.3vw;
                }
            }
        }
        // 尊享卡 vip跳转入口
        .user_vip {
            display: flex;
            width: 100%;
            height: 17vw;
            margin-top: 3.4vw;
            background-image: linear-gradient(235deg,rgba(238,189,109,1),rgba(255,232,190,1));
            border-radius: 5px 5px 0px 0px;
            padding: 1.54vw;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            justify-content:space-between;
            .user_text {
                .user_block {
                    color: #75440E;
                    font-weight: bold;
                    font-size: 4vw;
                }
                .user_title {
                    font-size: 3.5vw;
                    color: #75440E;
                    margin-top: 1.54vw;
                }
            }
            // 立即开通按钮
            .user_dredge {
                width: 24.69vw;
                height: 8.35vw;    
                background: rgba(255,245,225,1);
                box-shadow: 0px 1px 3px 0px rgb(217 152 39 / 68%);
                border-radius: 4.69vw;
                color: #7D3E00;
                line-height: 8.35vw;
                text-align: center;
                margin-top: 2.9vw;
                font-size: 3.5vw;
            }
        }
        // 升级VIP
        .user_currency {
            width: 100%;
            box-shadow: 0px 0px 12px 0px rgb(126 167 249 / 20%);
            background: #fff;
            border-radius: 0px 0px 5px 5px;
            padding-bottom: 0vw;
            padding-bottom: 1px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            height: 33.52vw;;
            .user_amount {
                ul {
                    display: flex;
                    li {
                        text-align: center;
                        flex-grow:1;
                        p {
                            color: #999;
                            font-weight: 500;
                            margin-top: 3vw;
                            font-size: 3.8vw;
                        }
                        span {
                            display: block;
                            color: #75440E;
                            font-weight: bold;
                            margin-top: 1.5vw;
                            font-size: 5.8vw;
                        }
                    }
                }
            }
            .user_vips {
                display: flex;
                width: 83%;
                background-image: linear-gradient(-90deg,rgba(238,189,110,1) 0%,rgba(255,232,190,1) 100%);
                border: 1px solid rgba(255,245,225,1);
                color: #75440E;
                height: 7.38vw;
                margin: 0 auto;
                margin-top: 4.63vw;
                justify-content:space-between;
                border-radius: 4.63vw;
                margin-bottom: 3vw;
                .user_icon {
                    width: 30%;
                    border-radius: 4.63vw 0px 0px 4.63vw;
                    font-weight: bold;
                    background: rgba(255,245,225,1);
                    height: 6.4vw;
                    margin-top: 0.49vw;
                    margin-left: 0.49vw;
                    img {
                        width: 4.63vw;
                        margin: 1.3vw 0 0 1.2vw;
                    }
                    span {
                        position: relative;
                        top: -0.7vw;
                        left: 1vw;
                    }
                }
                .user_vip2 {
                    color: #75440E;
                    font-size: 3.1vw;
                    line-height: 7.1vw;
                    margin-right: 4vw;
                    img {
                        width: 1.23vw;
                        height: 2vw;
                        margin-left: 0.5vw;
                    }
                }
            }
        }
    }
    // 玩家服务
    .player {
        width: 94vw;
        padding: 0 3vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 1.5vw;
        box-shadow: 0px 0px 13px 0px rgb(126 167 249 / 20%);
        margin-left: 3vw;
        border-radius: 5px;
        overflow: hidden;
        // 标题
        .player_title {
            color: #444;
            font-weight: bold;
            font-size: 3.85vw;
            width: 100%;
            margin: 3vw 0 1.5vw 3vw;
        }
        // 图标
        .player_iocn {
            width: 100%;
            padding-bottom: 3vw;
            ul {
                width: 100%;
                overflow: hidden;
                li {
                    float: left;
                    width: 25%;
                    text-align: center;
                    margin-top: 3vw;
                    img {
                        width: 40%;
                    }
                }
            }
        }
    }
    // 更多服务
    .moreService {
        width: 94vw;
        padding: 0 3vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 1.5vw;
        box-shadow: 0px 0px 13px 0px rgb(126 167 249 / 20%);
        margin-left: 3vw;
        border-radius: 5px;
        overflow: hidden;
        // 标题
        .moreService_title {
            color: #444;
            font-weight: bold;
            font-size: 3.85vw;
            width: 100%;
            margin: 3vw 0 1.5vw 3vw;
        }
        // 图标
        .moreService_icon {
            width: 100%;
            padding-bottom: 3vw;
            ul {
                width: 100%;
                overflow: hidden;
                li {
                    float: left;
                    width: 25%;
                    text-align: center;
                    margin-top: 3vw;
                    img {
                        width: 40%;
                    }
                }
            }
        }
    }
    // teb页
    .teb {
        width: 100vw;
        height: 13vw;
        background-color: red;
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
    // 手机号注册弹窗
    .register_lay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 10;
        .register_tel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 86%;
            height: 103.85vw;
            z-index: 11;
            background-color: #fff;
            -webkit-background-clip: content;
            border-radius: 2vw;
            // 表单版心
            .register_area {
                padding: 6vw;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                // 手机号
                .register_cell {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    img {
                        width: 6vw;
                        height: 6vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.5vw;
                        color: #555;
                    }
                }
                // 短信验证
                .register_verificationCode {
                    display: flex;
                    margin-top: 3vw;
                    .register_verificationCode_i {
                        display: flex;
                        width: 50vw;
                        padding-bottom: 2vw;
                        border-bottom: 1px solid rgba(230,228,228,1);
                        img {
                            width: 6.4vw;
                            height: 6.4vw;
                            margin-top: 1vw;
                        }
                        input {
                            width: 33vw;
                            height: 8vw;
                            font-size: 3.4vw;
                            // border: 1px solid #000;
                            margin-left: 2.1vw;
                            color: #555;
                        }
                    }
                    .register_verificationCode_b {
                        width: 25.3vw;
                        height: 8vw;
                        background-color: #018FFF;
                        color: #fff;
                        border: 1px solid #018fff;
                        border-radius: 1.5vw;
                        text-align: center;
                        line-height: 8vw;
                        margin-left: 2.1vw;
                        margin-top: 2vw;
                    }
                }
                // 密码
                .register_password {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    margin-top: 3vw;
                    img {
                        width: 6.4vw;
                        height: 6.4vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.1vw;
                        color: #555;
                    }
                }
                // 确认密码
                .register_password2 {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    margin-top: 3vw;
                    img {
                        width: 6.4vw;
                        height: 6.4vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.1vw;
                        color: #555;
                    }
                }
                // 真人验证
                .register_person {
                    width: 100%;
                    height: 8.6vw;
                    border: 1px solid #ccc;
                    margin-top: 3vw;
                    background-image: linear-gradient(180deg, #ffffff 0%,#f3f3f3 100%);
                    border-radius: 1vw;
                }
                // 下一步
                .register_nextStep {
                    width: 100%;
                    height: 9.25vw;
                    background-color: #D6D6D6;
                    border: 1px solid #D6D6D6;
                    color: #FFFFFF;
                    margin: 3.5vw auto;
                    border-radius: 1.5vw;
                    text-align: center;
                    line-height: 9.25vw;
                }
                // 协议
                .register_consent {
                    display: flex;
                    .register_consent_i {
                        width: 4.3vw;
                        height: 4.3vw;
                        img {
                            width: 4.3vw;
                            height: 4.3vw;
                        }
                    }
                    p {
                        font-size: 13px;
                        font-weight: 500;
                        color: #999999;
                        margin-left: 3vw;
                        span {
                            color: #018FFF;
                        }
                    }
                }
                // 普通注册
                .register_common {
                    width: 100%;
                    margin-top: 5vw;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(1,143,255,1);
                }
                // x 退出/关闭
                .register_clear {
                    position: absolute;
                    width: 3.6vw;
                    height: 3.6vw;
                    top: 3vw;
                    right: 3vw;
                    img {
                        width: 3.6vw;
                        height: 3.6vw;
                    }
                }
            }
        }
    }
    // 普通用户注册弹窗
    .register_common_lay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 10;
        .register_tel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 86%;
            height: 90.85vw;
            z-index: 11;
            background-color: #fff;
            -webkit-background-clip: content;
            border-radius: 2vw;
            // 表单版心
            .register_area {
                padding: 6vw;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                // 手机号
                .register_cell {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    img {
                        width: 6vw;
                        height: 6vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.5vw;
                        color: #555;
                    }
                }
                // 密码
                .register_password {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    margin-top: 3vw;
                    img {
                        width: 6.4vw;
                        height: 6.4vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.1vw;
                        color: #555;
                    }
                }
                // 确认密码
                .register_password2 {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    margin-top: 3vw;
                    img {
                        width: 6.4vw;
                        height: 6.4vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.1vw;
                        color: #555;
                    }
                }
                // 真人验证
                .register_person {
                    width: 100%;
                    height: 8.6vw;
                    border: 1px solid #ccc;
                    margin-top: 3vw;
                    background-image: linear-gradient(180deg, #ffffff 0%,#f3f3f3 100%);
                    border-radius: 1vw;
                }
                // 下一步
                .register_nextStep {
                    width: 100%;
                    height: 9.25vw;
                    background-color: #D6D6D6;
                    border: 1px solid #D6D6D6;
                    color: #FFFFFF;
                    margin: 3.5vw auto;
                    border-radius: 1.5vw;
                    text-align: center;
                    line-height: 9.25vw;
                }
                // 协议
                .register_consent {
                    display: flex;
                    .register_consent_i {
                        width: 4.3vw;
                        height: 4.3vw;
                        img {
                            width: 4.3vw;
                            height: 4.3vw;
                        }
                    }
                    p {
                        font-size: 13px;
                        font-weight: 500;
                        color: #999999;
                        margin-left: 3vw;
                        span {
                            color: #018FFF;
                        }
                    }
                }
                // 普通注册
                .register_common {
                    width: 100%;
                    margin-top: 5vw;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(1,143,255,1);
                }
                // x 退出/关闭
                .register_clear {
                    position: absolute;
                    width: 3.6vw;
                    height: 3.6vw;
                    top: 3vw;
                    right: 3vw;
                    img {
                        width: 3.6vw;
                        height: 3.6vw;
                    }
                }
            }
        }
    }
    // 登录弹窗
    .login_lay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 10;
        .register_tel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 86%;
            height: 70.85vw;
            z-index: 11;
            background-color: #fff;
            -webkit-background-clip: content;
            border-radius: 2vw;
            // 表单版心
            .register_area {
                padding: 6vw;
                margin-top: 8vw;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                // 手机号
                .register_cell {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    img {
                        width: 6vw;
                        height: 6vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.5vw;
                        color: #555;
                    }
                }
                // 密码
                .register_password {
                    display: flex;
                    padding-bottom: 2vw;
                    border-bottom: 1px solid rgba(230,228,228,1);
                    margin-top: 3vw;
                    img {
                        width: 6.4vw;
                        height: 6.4vw;
                        margin-top: 1vw;
                    }
                    input {
                        width: 43vw;
                        height: 8vw;
                        font-size: 3.4vw;
                        // border: 1px solid #000;
                        margin-left: 2.1vw;
                        color: #555;
                    }
                }
                // 登录
                .register_nextStep {
                    width: 100%;
                    height: 9.25vw;
                    background-color: #018FFF;
                    border: 1px solid #018FFF;
                    color: #FFFFFF;
                    margin: 3.5vw auto;
                    border-radius: 1.5vw;
                    text-align: center;
                    line-height: 9.25vw;
                }
                // 普通注册
                .register_common {
                    display: flex;
                    margin-top: 5vw;
                    justify-content:space-between;
                    .register_account_number {
                    text-align: left;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(1,143,255,1);
                    }
                    .forget_password {
                        text-align: right;
                        font-size: 13px;
                        font-weight: 500;
                        color: rgba(153,153,153,1);
                    }
                }
                // x 退出/关闭
                .register_clear {
                    position: absolute;
                    width: 3.6vw;
                    height: 3.6vw;
                    top: 3vw;
                    right: 3vw;
                    img {
                        width: 3.6vw;
                        height: 3.6vw;
                    }
                }
            }
        }
    }
    // 忘记密码弹窗
    
}
// 4.63vw = 1.5rem    1rem = 12.77066666666667px   1vw = 4.14px
</style>
