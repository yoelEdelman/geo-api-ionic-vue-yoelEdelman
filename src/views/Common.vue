<template>
    <div class="home">
        <ion-app>
            <Nav/>
            <div class="ion-page" main>
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-menu-button></ion-menu-button>
                        </ion-buttons>
                        <ion-title>Communes</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">

                    <commonForm/>

                </ion-content>
            </div>
        </ion-app>
        <!--    <ion-menu-controller></ion-menu-controller>-->

    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Nav from '@/components/Nav.vue'
    import Welcome from '@/components/Welcome.vue'
    import CommonForm from '@/components/CommonForm.vue'




    export default {
        name: 'home',
        components: {
            // HelloWorld,
            Nav,
            Welcome,
            CommonForm
        }
    }
</script>