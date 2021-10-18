<template> 
    <div class="mx-6" >       
        <v-row align="end" justify="space-between" class="mx-6">
            <br><br>
            <h2>{{ProductDetails.Name}}</h2><br>
            <div v-if="parseFloat(ProductDetails.Discount)!==0"><v-avatar color="yellow"  size="56" >{{ProductDetails.Discount}}%</v-avatar>off</div>
        </v-row>
        <v-row class="mx-2">
            <v-rating  :value=parseFloat(ProductDetails.Rating)  color="amber"  dense  half-increments  readonly  size="20"></v-rating>
            <div class="grey--text">({{ProductDetails.Rating}}) </div>
        </v-row>
        <br>
        <v-layout column align="start" name="price" class="mx-2">
            <h3 class="red--text body-4" >  Rs.{{(ProductDetails.Price - ProductDetails.Discount/100*ProductDetails.Price)}}/- Only </h3>            
            <h4 class="text-decoration-line-through grey--text mx-1" v-if="parseFloat(ProductDetails.Discount)!==0">Rs. {{ProductDetails.Price}}/- </h4>
        </v-layout >
        <hr><br>
        <p><b>Discription:</b> {{ProductDetails.Discription}}</p>
        <h5>Listed By {{ProductDetails.Shop}}</h5>
        <h6>Product ID: {{ProductDetails.ID}}</h6>
    </div>
    
</template>
<script>
    export default {
        name: 'Body',
        props: ["ProductDetails"]
    }
</script>