<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { Directive, DirectiveBinding } from 'vue';
//自定义命令，绑定拖拽
const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    console.log(moveElement)
    const mouseDown = (e:MouseEvent)=> {
        let X=e.clientX-el.offsetLeft
        let Y=e.clientY-el.offsetTop
        const move=(e:MouseEvent)=>{
            console.log(e);
            el.style.left=e.clientX-X+'px'
            el.style.top=e.clientY-Y+'px'
        }
        document.addEventListener('mousemove',move)
        document.addEventListener('mouseup',()=>{
            document.removeEventListener('mousemove',move)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<template>
    <div v-move class="box">
        <div  class="header"></div>
        <div></div>
    </div>
</template>

<style scoped lang='less'>
.box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 120px;
    border: 1px solid aqua;
    background-image: radial-gradient(pink, rgb(228, 249, 245));

    .header {
        border: 1px solid rgba(218, 195, 157, 0.818);
        height: 40px;
        background-image: linear-gradient(rgb(197, 6, 6), rgb(0, 126, 128));
    }
}
</style>