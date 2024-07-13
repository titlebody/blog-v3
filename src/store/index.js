import {defineStore} from "pinia";

export const user=defineStore("user",{
    state:()=>{
        return{
            users:'啦啦啦',
            age:18
        }
    },
    actions: {
        setAge() {
            this.age++;
        }
    },
    persist: true,
})