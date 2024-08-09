import {defineStore} from "pinia";
import {computed,ref} from "vue";
import {useDark,useToggle} from "@vueuse/core";


const isDark = useDark()
const toggleDark = useToggle(isDark)


export const configStore=defineStore('config',{
    state:()=>{
        return{
            isDark:isDark,
        }
    },
    getters:{
        getIsDark(){
            return this.isDark
        }
    },
    actions:{
        setToggleDark(){
            toggleDark()
            this.isDark = isDark.valueOf()
        }
    }
})

export const userStore=defineStore("user",{
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


export const articleStore=defineStore("article",()=>{
    let article=ref({
        id:'',
        title:"",
        desc:"",
        cover:'',
        createTime:"",
        updateTime:"",
        views:"",
        likes:'',
        tags:[],
        category:"",
        readDuration:""
    })
    let getArticle=computed(()=>article)

    function setArticle(val){
        Object.assign(article,val)
    }


    return {article, getArticle,setArticle}
})