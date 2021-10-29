<template>
    <v-row justify="end" align-content="center">
        <v-btn :href="product.Origin" color="primary" target="_blank" dark>BUY NOW</v-btn>
    </v-row>
</template>

<script>
import {mdiCart} from '@mdi/js'

    export default{
        name: 'Footer',
        props: ["product"],
        data()
        {
            return  {
                        icons: {mdiCart}
                    }
        }        

        // methods:{
        //     shareFun()
        //     {   
        //         const shareButton = document.querySelector('.share-button');
        //         const shareDialog = document.querySelector('.share-dialog');
        //         console.log("share fun called 1")
        //         shareButton.addEventListener('click', event => {    console.log("share fun called with event")
        //             //   if (navigator.share) 
        //             //   {console.log("share fun if condition called")
        //             //     navigator.share({
        //             //         title: 'WebShare API Demo',
        //             //         url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
        //             //     }).then(() => {
        //             //         console.log('Thanks for sharing!');
        //             //     })
        //             //     .catch(console.error);
        //             // }
        //             // else 
        //             // {console.log("share fun else condition called")
        //             //     shareDialog.classList.add('is-open');
        //             shareDialog.classList.add('is-open')
        //             console.log("is open called")
        //           //  }
        //         });
        //     }
        // }
    }
</script>

<style scoped>
    .share-dialog
    {
        width: 100vw; 
        display: none;
    }

    .share-dialog.is-open
    {
        display: block;
        z-index: 1;
    }
</style>