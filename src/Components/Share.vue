<template>
    <v-card  @click="$emit('updateOverlay', false)" light >
<!--         
        <v-subheader>Share to:</v-subheader>
        <v-card-text >   
            <ShareNetwork
                v-for="platform in socialPlatform"      :key="platform.id"
                :network="platform.name"                :url="currentUrl"
                :title="subject"                        :description="discription"
            >
                <v-row  align="center" class="ma-4">
                    <img :src="platform.image" height="40px" width="40px" alt="Icon" />
                    <p class="ml-4">{{platform.name}}</p>
                </v-row>
            </ShareNetwork> 
        </v-card-text>-->
        
        
    </v-card>   
</template>

<script>
    export default  {
        name: "Share",
        props: ["subject", "discription"],
        data()
        {
            return  {
                socialPlatform: [
                    {
                        image: "https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png",
                        name: "WhatsApp",
                        link: "https://www.whatsapp.com/"
                    },
                    {
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png",
                        name: "Facebook",
                        link: ""
                    },
                    {
                        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Twitter_icon.png",
                        name: "Twitter",
                        link: ""
                    }
                ],
                currentUrl: window.location.pathname
            }
        }
    }
</script>