<template>
        <v-card v-if="product">
            <Imge  style="height: 40vh; " :imageLink="(product.Image)"/>         
            <Body style="height: 50vh;" :ProductDetails="product"/>       
            <Footer style="height: 10vh;" :subject="product.Name" :discription="product.Discription"/>             
        </v-card>
</template>

<script>
import Imge from '../Components/Image.vue'
import Body from '../Components/Body.vue'
import Footer from '../Components/Footer.vue'

export default {
    name: "Card",
    components: {Imge, Body, Footer},
    props: ["product"],
}
</script>