<template>
    <v-row justify="space-between" class="mx-6">

        <v-btn @click="overlay = !overlay" class="sucess" rounded color="primary" dark> Share</v-btn>
        <v-overlay  :absolute="absolute"  :value="overlay" style="transform-origin: center;">
            <Share @updateOverlay = "overlay= ($event)" style="width: 100vw;"/>
        </v-overlay>

        <v-btn rounded color="primary" dark> Buy Now</v-btn>
    </v-row>
</template>

<script>
import Share from './Share.vue'
    export default{
        name: 'Footer',
        components: {Share},
        data() 
        {
            return  {
                        absolute: true,
                        overlay: false
                    }
        }
    }
</script>