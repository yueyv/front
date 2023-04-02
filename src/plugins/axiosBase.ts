import { def } from '@vue/shared'
import axios from 'axios'
const API=axios.create({
    baseURL:"/apiTest",
    timeout:2000
})
export default API