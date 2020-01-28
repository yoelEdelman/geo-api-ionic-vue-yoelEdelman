<template>
    <div>
        <ion-item>
            <ion-label position="floating">Ionic c'est de la MERDE !!!!</ion-label>
            <ion-input :value="city" @input="city = $event.target.value"></ion-input>
        </ion-item>

        <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-no-margin" @click="search">Ca me fait chier</ion-button>
        </div>

        <Card v-for="(res , index) in result"
              :title="res.nom"
              :subtitle="res.departement ? res.departement.code : 'ressource indisponible'"
              :body="res.departement ? res.departement.nom : 'ressource indisponible'"
        />
    </div>
</template>


<script>

    import Card from "../components/Card.vue"
    // import Title from "../components/Title";

    export default {
        name: "Common",
        components: {
            Card,
            // Title
        },
        data (){

            return {
                title: "Recherche par commune",
                city : "",
                result: "",
            }
        },

        methods: {
            search(){
                fetch('https://geo.api.gouv.fr/communes?nom='+this.city+'&fields=departement&boost=population&limit=5', {
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.length > 0){
                            this.result = data
                            console.log(this.result)
                        }
                        else {
                            return this.presentAlert("Aucun résultat")
                        }
                    })
                    .catch((data) =>{
                        return this.presentAlert("Une erreur est survenue")
                    })
            },
            presentAlert(msg) {
                return this.$ionic.alertController
                    .create({
                        header: 'Alert',
                        message: msg,
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            },

        },


    }
</script>