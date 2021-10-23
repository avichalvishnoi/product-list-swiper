<template>   
    <v-app  style="height: 100%;">         
        <swiper ref="mySwiper" @slideChange="swipeSlide" :options="swiperOptions" :slides-per-view="1" :space-between="0">
            <swiper-slide v-for="item in product" :key="item.id">
                <Card :product="item" style="height: 100vh; max-width:400px;"/>
            </swiper-slide>            
        </swiper>
    </v-app>   
</template>

<script>
import Card from './Card.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

    export default {
        name: "Preview",
        components: {Card, Swiper,  SwiperSlide},
        data()
        {
            return {
                product : [],
                index: 1,
                slideIndex: 0,
                swiperOptions: {
                    direction:"vertical",
                    loop: false,
                    pagination: {
                      el: '.swiper-pagination'
                    }
                }
            }
        },
        async created()
        {   
            let that = this;            
            let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTXXohJ3qiYbvGvKURF_gP1Wu6_Cqfz5r369LeXMhclvxRvkGikJJX-gE2Z7rlhFN8tIE8_UdoFequ7/pub?gid=0&single=true&output=csv'
                await this.$papa.parse(url, {
                    download: true,
                    header: true,
                    complete: function(results)
                    {                   
                        that.product = results.data
                        that.setSlideIndex()
                    } 
                })      
        },
        methods: {          
            swipeSlide()
            {
                this.$router.push({ name:'Preview', params:{id: this.product[this.$refs.mySwiper.$swiper.activeIndex].ID } }).catch(()=>{});
            },
            setSlideIndex()
            {         
                for(let i=0; i<this.product.length; i++)
                {      
                    if(this.product[i].ID===this.$route.params.id)
                    {  
                       this.slideIndex = i 
                    }
                }  

                if(this.$route.params.id==1001)
                {
                    this.swiper.slideTo(this.slideIndex, this.product.length, false)
                }
                else
                {   
                    (this.slideIndex === 0)? this.$router.push({ name:'404', }): this.swiper.slideTo(this.slideIndex, this.product.length, false)
                }
            }
        },
        directives: {
            swiper: directive
        },
        computed: {
            swiper() 
            {
              return this.$refs.mySwiper.$swiper
            }
        }
    }
</script>