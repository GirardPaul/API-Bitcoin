//Variable qui stock l'URL que l'on va appeler

const url = "https://blockchain.info/ticker";



//Création de la fonction qui va actualisé le prix

function recupererPrix() {

    //Créer une requête 

    let requete = new XMLHttpRequest(); //Créer un objet

    //On ouvre notre requête 

    requete.open('GET', url); // Premier parametre GET / POST , deuxième parametre l'url

    //Préciser le type de réponse que l'on souhaite obtenir

    requete.responseType = "json"; // Nous attendons du json

    // Envoyer la requete

    requete.send();

    //Dès qu'on a chargé la réponse de notre requête, on execute cette fonction

    requete.onload = function () {

        //On vérifie l'état de notre requete
        //requete.readyState = état actuelle ne notre requete
        //XMLHttpRequest.DONE = requete terminé 

        if (requete.readyState === XMLHttpRequest.DONE) {

            //Vérifier que tout c'est bien passé, que tout est bien chargé
            if (requete.status === 200) {

                //On stocke la réponse de notre requête
                let reponse = requete.response;
                console.log(reponse);


                //On récupère la donnée recherchée
                let prixEnEuros = reponse.EUR.last;
                console.log(prixEnEuros);

                //On affiche le prix dans notre page
                document.querySelector('#price_label').textContent = prixEnEuros;

            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}

setInterval(recupererPrix, 500);