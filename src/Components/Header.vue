<template> 
    <v-row align="center" justify="space-between" class="ma-1 primary" dark>
        <h4 style="color: white;">{{product.Shop}}</h4>
        <!--   -->
        <div>
          <div v-if="webShareApiSupported">
            <v-icon @click="shareViaWebShare" id="shareImgBtn" class="sucess" dark>{{icons.mdiShareVariant}}</v-icon>
          </div>
          <div v-else>
              <v-icon @click="overlay= !overlay"  class="sucess" dark>{{icons.mdiShareVariant}}</v-icon>
                <v-overlay  :absolute="absolute"  :value="overlay" style="transform-origin: center;"> 
                    <Share @updateOverlay="overlay= ($event)" :subject="product.Name" :discription="product.Discription"/>
                </v-overlay>
          </div>
        </div>
    </v-row>
</template>

<script>
import Share from './Share.vue'
import {mdiShareVariant} from '@mdi/js'

export default  {
                    name: 'Head',
                    components: {Share},
                    props: ["product"],
                    data() 
                    {
                        return  {
                                    absolute: true,
                                    overlay: false,
                                    icons: { mdiShareVariant },
                                    shareData: {
                                                title: this.product.Name,
                                                text: this.product.Discription,
                                                url: window.document.location.href
                                               }
                                }
                    },
                    methods:{
                      shareViaWebShare() 
                      {
                        navigator.share(this.shareData)
                      }
                    },
                    computed: {
                      webShareApiSupported() {
                        return navigator.share
                      }
                    }
                    
                }
</script>
