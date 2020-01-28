<template>
    <div class="home ion-page">
        <Title/>

        <ion-content class="ion-padding">
            <ion-item>
                <ion-label position="floating">Entrer un département (exemple : 75)</ion-label>
                <ion-input
                        :value="departement" @input="departement = $event.target.value"
                >

                </ion-input>
            </ion-item>
            <ion-button style="width: 100%; margin-top: 20px" color="primary" @click="search">Trouver</ion-button>

            <Card v-for="(res , index) in result"
                  :title="res.nom"
                  :subtitle="res.codeDepartement"
                  :body="`Population : ${res.population}`"
            />

        </ion-content>
<!--        <Nav/>-->
    </div>
</template>

<script>
    import Card from "../components/Card";
    // import Title from "../components/HeadTitle";
    // import Nav from "../components/Nav";
    export default {
        components: {
            Card,
            // Title,
            // Nav
        },
        data() {

            return {
                departement: "",
                result: "",
            }
        },
        methods: {
            search(){

                if (this.departement.length <= 3 && !isNaN(this.departement)){
                    fetch('https://geo.api.gouv.fr/departements/'+this.departement+'/communes', {
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.length > 0){

                                this.result = data
                                console.log(this.result)
                            }
                            else{
                                return this.presentAlert("Aucun résultat")

                            }
                        })
                        .catch((data) =>{
                            return this.presentAlert("un incident s'est produit")
                        })
                }
                else{

                    return  this.presentAlert("Code Postal incorrect")

                }

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