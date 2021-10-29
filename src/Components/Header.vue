<template> 
    <v-row align="center" justify="space-between" class="ma-1 primary" dark>
        <h4 style="color: white;">{{product.Shop}}</h4>
        <v-icon  @click="shareViaWebShare" class="sucess" dark>
            {{icons.mdiShareVariant}}
        </v-icon>
        <!-- @click="overlay= !overlay"<v-overlay  :absolute="absolute"  :value="overlay" style="transform-origin: center;"> 
            <Share @updateOverlay="overlay= ($event)" :subject="product.Name" :discription="product.Discription"/>
        </v-overlay>   -->
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
                                    icons: { mdiShareVariant }
                                }
                    },
                    methods:{
                      shareViaWebShare() 
                      {
                        navigator.share({
                          title: 'Title to be shared',
                          text: 'Text to be shared',
                          url: 'URL to be shared'
                        })
                      }
                    }
                }
</script>
