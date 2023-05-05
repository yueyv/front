<script setup lang='ts'>
import { ref, reactive } from 'vue'
import second_a from './second_a.vue';
import { message } from 'ant-design-vue';
import second_search from './second_search.vue';
const link_list = [[
    {
    "link": 'https://chat.openai.com/',
    "link_image": '../../assets/icon/chatGPT.jpg',
    "link_title": 'chatGPT'
},
],[{
    "link": 'https://www.runoob.com/',
    "link_image": 'https://static.runoob.com/images/favicon.ico',
    "link_title": '菜鸟教程'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
}], [{
    "link": 'https://juejin.cn/',
    "link_image": 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
    "link_title": '掘金'
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
    <section>
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
    </section>
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
    transition: all 0.5s;

    // grid-row-start: span 2;
    &:hover {
        box-shadow: 10px 10px 5px 2px rgba(255, 255, 255, 0.2);
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