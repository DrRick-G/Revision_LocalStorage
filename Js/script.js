/*INSCRIPTION */
let BtnInscrire = document.getElementById('inscrire');

BtnInscrire.addEventListener('click',()=>{
    let form = JSON.parse(localStorage.getItem('form')) || [];
    form.push({
        Nom:document.getElementById('nom').value,
        Prenom:document.getElementById('prenom').value,
        Pseudo:document.getElementById('pseudo').value,
        Mdp:document.getElementById('mdp1').value,
        Conf_mdp:document.getElementById('conf_mdp').value,
    
});     
    localStorage.setItem('form',JSON.stringify(form));
    location.reload();
    event.preventDefault();
});

