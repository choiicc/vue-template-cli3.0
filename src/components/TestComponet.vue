<template>
    <div>我是来打酱油的
        <div>{{test}}{{demo}}</div>
        <slot>默认是这样子的</slot>
        <div>{{msg}}</div>
        <img src="/platformimg/fish/AGTCG.jpg">
        <img :src="MTJPG">
        public中的图片
        <img src="/fish/MT.jpg">
        <img :src="GG">
    </div>
</template>

<script>
import {mapState} from 'vuex'
import  MTJPG from '@/static/platformimg/fish/MT.jpg'
import  GG from '@p/fish/GGTCG.jpg'

export default {
    props:{
        msg: String
    },
    data(){
        return {
            MTJPG,
            GG
        }
    },
    computed: {
        ...mapState(['test','demo'])   
    }
}
</script>