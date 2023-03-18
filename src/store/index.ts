import { defineStore } from "pinia";
import { Names } from "./store-name";
type User = {
    name: string,
    age: number
}

const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "挥挥",
                age: 99
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
            return `$-${this.name}-${this.getUserAge}`
        },
        getUserAge():number{
            return this.user.age
        }
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