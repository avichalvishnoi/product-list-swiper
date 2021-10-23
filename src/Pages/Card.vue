<template>
        <v-card v-if="product" style=" background: #f5f5f5;">
            <Head style="height: 6%;" :product="product" class="px-6"/>
            <Imge  style="height: 40%; " :imageLink="(product.Image)"/>         
            <Body style="height: 40%;" :ProductDetails="product" class="mx-6"/>       
            <Footer style="height: 14%;" :product="product" class="mx-6"/>             
        </v-card>
</template>

<script>
import Head from '../Components/Header.vue'
import Imge from '../Components/Image.vue'
import Body from '../Components/Body.vue'
import Footer from '../Components/Footer.vue'


export default {
    name: "Card",
    components: {Head, Imge, Body, Footer},
    props: ["product"],
}
</script>