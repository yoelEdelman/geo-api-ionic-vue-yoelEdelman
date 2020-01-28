<template>
<!--    <div>-->
        <ion-menu side="start">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-icon name="home" slot="start"></ion-icon>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="car" slot="start"></ion-icon>
                        <ion-router-link href="/common">Communes</ion-router-link >
                    </ion-item>
                    <ion-item>
                        <ion-icon name="cart" slot="start"></ion-icon>
                        <ion-router-link  href="/departments">Departement</ion-router-link >
                    </ion-item>
                    <ion-item>
                        <ion-icon name="man" slot="start"></ion-icon>
                        <ion-router-link  href="/region">Region</ion-router-link >
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
<!--    </div>-->
</template>

<script>
    // import Welcome from '@/components/Welcome.vue'

    export default {
        name: "nav",
        components: {
            // Welcome
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>