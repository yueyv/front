<script setup lang='ts'>
import { ref, reactive } from 'vue'
import second_a from './second_a.vue';
import { message } from 'ant-design-vue';
import second_search from './second_search.vue';
const link_list = [[
    {
    "link": 'https://chat.openai.com/',
    "link_image": '/icon/chatGPT.jpg',
    "link_title": 'chatGPT'
},{
    "link":'https://www.uviewui.com/',
    "link_image":"https://www.uviewui.com/favicon.ico",
    "link_title":"uview"
},{
    "link":'https://element-plus.gitee.io/zh-CN/',
    "link_image":"https://element-plus.gitee.io/images/element-plus-logo-small.svg",
    "link_title":"EL-plus"
},{
    "link":'https://echarts.apache.org/zh/index.html',
    "link_image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAt1BMVEUAAACqMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2qMU2oK0iqMU2qMU2qMU2qMU2qMU2qMU3///+mJ0SlJUOpL0unKUaoLEjjusKxRFzy4OPt09jWnKjTlKGpLUr47e7u19vrztTgs7zKf4/Db4HAZHi8XXK6VmyuOlSsNVD79vbmw8rcrLbXoKrLgpHIe4vCbH+2T2apL0qfFjZpasZcAAAAGnRSTlMAlWUM5O3V6KdN2cqunINzXVUZFO/cz82ySm4ogdMAAADeSURBVBjTTZDXdoMwEEQXEBhcEpfUQRIl4O7YcXr5/+/KypKM7+M9Gs3ZoRNRFgzi+H40iehMlsBxO/buChcEndNSSlV29hFAga9NNa8VDCF39NkdmpxZfhZgejPKgMXLU255lvZpAKg2dzTQLIc0gP5d5Z6D+SChGPro0j4vWKJcn+WPWnAT3QFq7t1mX9UF+jQy7Usn93+rd+gHmgCQOyer7UfTqpAiYey37XptZb27mRKNYexxW63fzKG6vCYmgF2kLE6TpHZhth2p3zkUXvU465mFaSJEMgynZPgHXx8i16SguRAAAAAASUVORK5CYII=",
    "link_title":"Echarts"
},{
    "link":'https://uniapp.dcloud.io/',
    "link_image":"/icon/uni-app.png",
    "link_title":"uni-app"
},{
    "link":"http://zhongguose.com/#putaojiangzi",
    "link_image":"data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAACEhIQAz8/PAO3t7QCXl5cAj4+PAI+PjwDm5ua6/f39/9bW1h28vLx2wsLCAKampgCmpqYAenp6AMfHxwDDw8MAhISEAM/PzwDt7e0AtLS0AJKSkgCJiYkA//////////////////////////+vr68Ar6+vAH9/fwDHx8cAw8PDAISEhADPz88A7e3tAO7u7gDb29sA3t7eJv//////////////////////////g4ODAHp6egCAgIAAx8fHAMPDwwCEhIQA0NDQAPX19WLg4OBIwMDAAM7Ozh/+/f7///////////////7//////9jY2ADZ2NkAdnZ2AMfHxwDDw8MAfn5+AP///////////////////v+QjpQN5+Lx/+vk9v/w6vj/8uv5/8fGxprr5vDS////////////////wcHBDmhoaAD///////////////////7/7ef3/8+38v/PvfL/1cTw/9rN7//YxfH/8On2//////////////////39/f/19fXk////////////////+fX8/+LW8P+5ifX/o1Dw/4Ye6/+WP+7/0b/x/+3l9v////////////////+3t7dA//////////////////////Dq9//XxvH/hRHx/zYEvv8uALn/hhTy/8698P/q4fX//////////////////////3R0dAD///////////35/v/l2/T/yrP1/14c0f8pB6z/Iwam/0wNw//Ls/H/5tzz//38/f///////////6ioqEt3d3cA0dHRALW1tQD28fY10b7x/9S98P+tc/T/jhvu/6BJ8f+GHPT/y7Lw/8it9P/HxsZ3+vr6xra2tiWNjY0AgICAAJqamgC6uroA/v7+//36/v/v5/b/283u/8u09f/Hrvb/1sbu/+jf8f/28Pv//v3+/29vbwCUlJQAjo6OAKGhoQChoaEA/v7+/v/////+/v7////+/+zn9f/h1PP/4tP0/+rj9f/8+/7////////////////+enp6AHp6egD7+/sA+/v7AP///////////////////////v7/8u37//Pw+////v3//////////////////v7+/8LCwgDCwsIAmpqaAJqamgD6+vrz/v7+/////////////////+jo6M3q6urC/////////////////v7+//////+kpKQApKSkAJiYmACYmJgAysrKAMTExJv///////////////+BgYEAiIiIAP///////////////9/f36qjo6MAb29vAG9vbwCYmJgAmJiYAM7OzgB4eHgAAAAAAAAAAAAAAAAAQEBAAE9PTwBwcHAAra2tGsrKygd2dnYAq6urAG9vbwBvb28A/P8AAPwfAAD8HwAA/B8AAIQBAACAAAAAAAEAAAAAAACAAQAA8AsAAOAHAADAAwAAwAMAAMADAADhhwAA//8AAA==",
    "link_title":"中国色"
},{
"link":"https://developer.mozilla.org/zh-CN/",
"link_image":"https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
"link_title":"MDN",
},{
"link":"https://github.com/",
"link_image":"https://images.frontendjs.com/github.png?imageView2/2/h/30",
"link_title":"github",
},{
"link":"https://cn.vuejs.org/",
"link_image":"https://cn.vuejs.org/logo.svg",
"link_title":"vue3",
},{
"link":"https://senior-frontend.pages.dev/",
"link_image":"https://hejialianghe.gitee.io/logo.png",
"link_title":"web全栈",
},{
"link":"https://cssgradient.io",
"link_image":"https://cssgradient.io/images/favicon-23859487.png",
"link_title":"css渐变",
},{
"link":"https://vant-contrib.gitee.io/vant/v3/#/zh-CN",
"link_image":"https://img.yzcdn.cn/vant/logo.png",
"link_title":"Vant",
}
],[{
    "link": 'https://www.runoob.com/',
    "link_image": 'https://static.runoob.com/images/favicon.ico',
    "link_title": '菜鸟教程'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}]]


</script>

<template>
    <second_search></second_search>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>常用</fieldset>
            </div>
            <second_a v-for="key in link_list[0].length" :link="link_list[0][key - 1].link"
                :link_img="link_list[0][key - 1].link_image" :link_title="link_list[0][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>教程</fieldset>
            </div>
            <second_a v-for="key in link_list[1].length" :link="link_list[1][key - 1].link"
                :link_img="link_list[1][key - 1].link_image" :link_title="link_list[1][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>社区</fieldset>
            </div>
            <second_a v-for="key in link_list[2].length" :link="link_list[2][key - 1].link"
                :link_img="link_list[2][key - 1].link_image" :link_title="link_list[2][key - 1].link_title"></second_a>
        </div>
    </section>
    <!-- <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>文档</fieldset>
            </div>
            <second_a v-for="key in link_list[3].length" :link="link_list[3][key - 1].link"
                :link_img="link_list[3][key - 1].link_image" :link_title="link_list[3][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>类库</fieldset>
            </div>
            <second_a v-for="key in link_list[4].length" :link="link_list[4][key - 1].link"
                :link_img="link_list[4][key - 1].link_image" :link_title="link_list[4][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>UI框架</fieldset>
            </div>
            <second_a v-for="key in link_list[5].length" :link="link_list[5][key - 1].link"
                :link_img="link_list[5][key - 1].link_image" :link_title="link_list[5][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>框架</fieldset>
            </div>
            <second_a v-for="key in link_list[6].length" :link="link_list[6][key - 1].link"
                :link_img="link_list[6][key - 1].link_image" :link_title="link_list[6][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>可视化图标库</fieldset>
            </div>
            <second_a v-for="key in link_list[7].length" :link="link_list[7][key - 1].link"
                :link_img="link_list[7][key - 1].link_image" :link_title="link_list[7][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>设计</fieldset>
            </div>
            <second_a v-for="key in link_list[8].length" :link="link_list[8][key - 1].link"
                :link_img="link_list[8][key - 1].link_image" :link_title="link_list[8][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>图标</fieldset>
            </div>
            <second_a v-for="key in link_list[9].length" :link="link_list[9][key - 1].link"
                :link_img="link_list[9][key - 1].link_image" :link_title="link_list[9][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>语言</fieldset>
            </div>
            <second_a v-for="key in link_list[10].length" :link="link_list[10][key - 1].link"
                :link_img="link_list[10][key - 1].link_image" :link_title="link_list[10][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>设计工具</fieldset>
            </div>
            <second_a v-for="key in link_list[11].length" :link="link_list[11][key - 1].link"
                :link_img="link_list[11][key - 1].link_image" :link_title="link_list[11][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>构建工具</fieldset>
            </div>
            <second_a v-for="key in link_list[12].length" :link="link_list[12][key - 1].link"
                :link_img="link_list[12][key - 1].link_image" :link_title="link_list[12][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>svg工具</fieldset>
            </div>
            <second_a v-for="key in link_list[13].length" :link="link_list[13][key - 1].link"
                :link_img="link_list[13][key - 1].link_image" :link_title="link_list[13][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>css工具</fieldset>
            </div>
            <second_a v-for="key in link_list[14].length" :link="link_list[14][key - 1].link"
                :link_img="link_list[14][key - 1].link_image" :link_title="link_list[14][key - 1].link_title"></second_a>
        </div>
    </section>
    <section>
        <div class="second_main">
            <div class="a_title">
                <fieldset>其他</fieldset>
            </div>
            <second_a v-for="key in link_list[15].length" :link="link_list[15][key - 1].link"
                :link_img="link_list[15][key - 1].link_image" :link_title="link_list[15][key - 1].link_title"></second_a>
        </div>
    </section> -->
</template>

<style scoped lang='less'>


.second_main {
    grid-auto-flow: row dense;
    background: none;
    background-color: rgba(255, 255, 255, 0.1);
    // opacity: 0.2;
    border-radius: 20px;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    // top: 20vw;
    margin-bottom: 20px;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    overflow: hidden;
    min-width: 60vw;
    min-height: 20vh;
    justify-content: flex-start;
    align-items: flex-start;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap:5px ;
    transition: all 0.5s;

    // grid-row-start: span 2;
    &:hover {
        box-shadow: 5px 5px 5px 2px rgba(255, 255, 255, 0.2);
    }

    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) // grid-template-rows:repeat(auto-fit)
}

fieldset {
    border: 0;
    border-bottom: 1px solid #fcb5b5;
    text-align: center;
}

.a_title {
    // position: relative;
    font-size: 24px;
    color: #ffd7d7;
    // width: 80vw;
    padding: 0;
    grid-column: 1/-1;
    // padding-bottom: 4px;
}
</style>