<template> 
    <div  class="body">       
        <v-row align="end" justify="space-between" class="ma-1">
            <h2>{{ProductDetails.Name}}</h2><br>
            <div v-if="parseFloat(ProductDetails.Discount)!==0"><v-avatar color="red"  size="70" style="color: white;">{{ProductDetails.Discount}}%<br>off</v-avatar></div>
        </v-row>
        <v-row class="mx-1">
            <v-rating  :value=parseFloat(ProductDetails.Rating)  color="amber"  dense  half-increments  readonly  size="20"></v-rating>
            <div class="grey--text">({{ProductDetails.Rating}}) </div>
        </v-row>
        <br>
        <v-layout column align="start" name="price" class="">
            <h3 class="red--text body-4" >  Rs.{{(ProductDetails.Price - ProductDetails.Discount/100*ProductDetails.Price)}}/- Only </h3>            
            <h4 class="text-decoration-line-through grey--text mx-1" v-if="parseFloat(ProductDetails.Discount)!==0">Rs. {{ProductDetails.Price}}/- </h4>
        </v-layout >
        <hr><br> 
        <p ><b>Discription:</b> {{ProductDetails.Discription}} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
    
</template>
<script>
    export default {
        name: 'Body',
        props: ["ProductDetails"]
    }
</script>

<style scoped>
    p
    {
        text-align: justify;
    }
    .body
    {
       
    }
</style>