<template>
    <v-row justify="space-between" class="mx-6 share-button">
        
        <v-btn @click="shareFun();" class="sucess" rounded color="primary" dark> Share</v-btn>
        <!-- <v-overlay  :absolute="absolute"  :value="overlay" style="transform-origin: center;"> -->
            <Share @updateOverlay = "overlay= ($event)" class="share-dialog" style="width: 100vw;" :subject="subject" :discription="discription"/>
        <!-- </v-overlay> -->

        
            <v-btn rounded color="primary" dark> Buy Now</v-btn>
        
    </v-row>
</template>

<script>
import Share from './Share.vue'
    export default{
        name: 'Footer',
        components: {Share},
        props: ["subject", "discription"],
        data() 
        {
            return  {
                        absolute: true,
                        overlay: false
                    }
        },

        methods:{
            shareFun()
            {   
                const shareButton = document.querySelector('.share-button');
                const shareDialog = document.querySelector('.share-dialog');

                shareButton.addEventListener('click', event => {
                      if (!navigator.share) 
                      {console.log("share fun if condition called")
                        navigator.share({
                            title: 'WebShare API Demo',
                            url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
                        }).then(() => {
                            console.log('Thanks for sharing!');
                        })
                        .catch(console.error);
                    }
                    else 
                    {console.log("share fun else condition called")
                        shareDialog.classList.add('is-open');
                    }
                });
            }
        }
    }
</script>