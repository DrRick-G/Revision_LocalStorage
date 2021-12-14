/*CONNEXION*/

let BtnConnecter = document.getElementById('connecter');
let myForm = document.getElementById('form-connexion');
let connectPseudo = document.getElementById('connecterPseudo');
let connectMdp = document.getElementById('connectMdp');
let local = JSON.parse(localStorage.getItem("form"));
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let pseudo = connectPseudo.value;
    let passe = connectMdp.value;
    let bool;
    local.forEach(element =>{
        if(pseudo == element.Pseudo && passe == element.Mdp){
            bool = "Vous allez être redirigé vers votre espace utilisateur!";
            location.href="espace.html";
        } else if (pseudo != element.Pseudo || passe != element.Mdp){
            bool = "Mot de passe ou Identifiant incorrect";
        }
    })
    alert(bool);
 });
 