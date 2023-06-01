export function handleScroll(func: Function){
    // 获取页面的滚动高度、视口高度和页面内容高度
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const contentHeight = document.documentElement.scrollHeight;
  
    // 判断是否滚动到页面底部
    if (scrollHeight + windowHeight >= contentHeight) {
      // 执行触发事件的逻辑
      func();
    }
  }
  