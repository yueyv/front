import { defineStore } from "pinia";

import { Names } from "./store-name";
// type User = {
//     name: string,
// }

// const Login = (): Promise<User> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 name: "test",
//             })
//         }, 10);
//     })
// }
// export const useTestStore = defineStore(Names.TEST, {
//     state: () => {
//         return {
//             user: <User>{},
//             name: 1
//         }
//     },
//     //computed 计算修饰
//     getters: {
//         newName():string{
//             return `$-${this.name}`
//         },

//     },
//     //mothods 做同步和异步 
//     actions: {
//         async setUser() {
//             const result= await Login()
//             this.user=result
//             this.setName(12)
//         },
//         setName(name:number){
//             this.name=name
//         }
//     }
// })
export const useINTERTIMEStore = defineStore(Names.INTERTIME, {
    state: () => {
        return {
            inter_time: '10:00',
            latestTime: '00:00'
        }
    },
    //computed 计算修饰
    getters: {
        getlatestTime(state) {
            return state.inter_time
        }

    },
    //mothods 做同步和异步 
    actions: {
        computedlatestTime() {
            let now = new Date();

            let [inputHour, inputMinute] = this.inter_time.split(":").map(time => parseInt(time));


            let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), inputHour, inputMinute);

            let diffTime = now.getTime() - targetTime.getTime();
            let diffHour = Math.floor(diffTime / (1000 * 60 * 60));
            let diffMinute = Math.floor((diffTime / (1000 * 60)) % 60);

            this.inter_time = `${diffHour}:${diffMinute}`
        },
        computedinter_time() {
     
            let time = this.inter_time;


            let intervalId = setInterval(() => {
                let [hour, minute] = time.split(":").map(time => parseInt(time));
                if (minute < 59) {
                    minute++;
                } else {
                    hour++;
                    minute = 0;
                }
                const newHour = hour.toString()
                const newMinute = minute.toString().padStart(2, "0");

         
                this.inter_time = `${newHour}:${newMinute}`;
            },60000)

            return function stop() {
                clearInterval(intervalId)
            }
        }
    }
})