<template>
        <img style="object-fit: cover;" :src="imageLink" :alt="imageLink" width="100%" height="100%">
</template>
<script>
    export default {
        name: 'Imge',
        props: ['imageLink']
    }
</script>