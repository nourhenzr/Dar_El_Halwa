form = document.querySelector("#commande");
nom = form.querySelector("#nom");
prenom = form.querySelector("#prenom");
addressTel = form.querySelector("#site");
tel = form.querySelector("#tel");
Codepos=form.querySelector("#code")
parts = form.qerySelector("#nbrp");
adresseLivraison=form.querySelector("#adresse")
gouvernorat = form.querySelector("#gouvernorat");
sucre = form.querySelector("#nc");
message = form.querySelector("#message");
messGateau = form.querySelector("#mess");
radios = form.querySelectorAll('input[name="occasions"]');
 parfums = form.querySelectorAll('input[name="parfums[]"]');
recapitulatif = form.querySelector("#recapitulatif");
estimation = form.querySelector("#estimation");
statut = form.querySelector("#statut");
precision= form.querySelector("#messagepre");
erreurprecision = form.querySelector("#error-messagepre");
btnSubmit = form.querySelector('button[type="submit"]');
btnReset = form.querySelector('button[type="reset"]');
erreurNom = form.querySelector("#error-nom");
erreurTel = form.querySelector("#error-telephone");
erreurParts = form.querySelector("#error-nbpr");
function actualiserRecapitulatif() {
console.log(form, parts);
console.log(radios.length);
console.log(parfums.length);
function actualiserRecapitulatif(){
    n = parts.valueAsNumber;
    gouvernorat=document.querySelector("input[#gouvernorat]:checked").value;
    occasion=document.querySelector("#r").value;
    parfums = document.querySelectorAll('input[name="parfums[]"]:checked');
    message=document.querySelector("#messages").value;
    sucre=document.querySelector("#sucre").value;

    estimation.textContent = prix.toFixed(2) + " DT";
    sucre.textContent = sucre.value + " %";
    precision.textContent=text.length + "caracteres";
}
}
