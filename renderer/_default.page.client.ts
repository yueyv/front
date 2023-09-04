export { render }
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import { createApp } from './app'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const {app,router} = createApp(Page, pageProps, pageContext)
  await router.isReady()

  app.use(Antd)
  app.use(ElementPlus)
  app.mount('#app')
}


