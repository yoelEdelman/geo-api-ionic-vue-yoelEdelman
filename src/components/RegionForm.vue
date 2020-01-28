<template>
    <div class="home ion-page">
        <Title/>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-label position="floating">Entrer un code postal</ion-label>
                <ion-input
                        :value="postalCode" @input="postalCode = $event.target.value"
                >

                </ion-input>
            </ion-item>
            <ion-button style="width: 100%; margin-top: 20px" color="primary" @click="search">Trouver</ion-button>

            <Card v-for="(res , index) in result"
                  :title="res.nom"
                  :postCode="res.codesPostaux"
                  :body="`Population : ${res.population}`"
            />
        </ion-content>
        <Nav/>

    </div>
</template>
<script>

    import Card from "../components/Card.vue";
    // import Title from "../components/HeadTitle";
    // import Nav from "../components/Nav"
    export default {
        // name: "home",
        components: {
            Card,
            // Title,
            // Nav
        },
        data() {
            return {
                postalCode: "",
                result: "",
            }
        },

        methods: {
            search() {
                if (this.postalCode.length === 5 && !isNaN(this.postalCode)) {
                    fetch('https://geo.api.gouv.fr/communes?codePostal=' + this.postalCode, {})
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.length > 0) {
                                this.result = data
                                this.postalCode = ""

                            } else {
                                return this.presentAlert("Aucun résultat")
                            }
                        })
                        .catch((data) => {
                            return this.presentAlert("un incident s'est produit")
                        })
                } else {
                    return this.presentAlert("Code Postal incorrect")
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