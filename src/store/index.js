import {defineStore} from "pinia";
import {computed,ref} from "vue";


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