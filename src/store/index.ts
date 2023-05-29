import { defineStore } from "pinia";
import { Names } from "./store-name";
type User = {
    name: string,
}

const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "test",
            })
        }, 10);
    })
}
export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            user: <User>{},
            name: 1
        }
    },
    //computed 计算修饰
    getters: {
        newName():string{
            return `$-${this.name}`
        },

    },
    //mothods 做同步和异步 
    actions: {
        async setUser() {
            const result= await Login()
            this.user=result
            this.setName(12)
        },
        setName(name:number){
            this.name=name
        }
    }
})