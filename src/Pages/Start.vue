<template>
    <v-app>
        <v-row align="center" justify="center">
            <router-link :to="{ name:'Preview', params:{id: 1001} }"  >
              <v-btn>Go To Preview</v-btn>
            </router-link>
        </v-row>
    </v-app>
</template>

<script>
export default{
    name: 'Start'
}
</script>