//toggle
var toggle_menu = document.querySelector('.responsive-menu') ;
var menu = document.querySelector('.menu') ;
toggle_menu.onclick = function() {
    toggle_menu.classList.toggle('active') ;
    menu.classList.toggle('responsive') ;
}

//chatbot
 var question = document.getElementById('question') ;
 var affichage = document.getElementById('affichage') ;
 var reponse = document.getElementById('reponse') ;
affichage.onclick = function() {
    if(question.value == "bonjour" || question.value === "salut") {
        reponse.innerHTML = "Bienvenue ! comment je pourrais vous aider ?" ;
    
    }
    if(question.value == "quelle est votre numéro de téléphone ?" ) {
        reponse.innerHTML = "+216 97629449" ;
    
    }
    if(question.value == "quelle est votre adresse éléctronique?" ) {
        reponse.innerHTML = "airtravel@gmail.com" ;
    
    }
    if(question.value == "Comment je peux vous contacter?" ) {
        reponse.innerHTML = '<a href="#contact">contact</a>' ;
    
    }
    if(question.value == "Comment je peux consulter les destinations possibles?" ) {
        reponse.innerHTML = '<a href="#popular-destination">destinations</a>' ;
    
    }
    if(question.value == "Quelle est votre adresse?" ) {
        reponse.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.59408210793!2d10.060876437125373!3d36.794854530130685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1684613298007!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' ;
    
    }
    if(question.value == "merci" ) {
        reponse.innerHTML = "je vous en prie ! N'hésitez pas à me poser des questions" ;
    
    }
    


}

//verification du formulaire
 var nom = document.getElementById('nom') ;
 var objet = document.getElementById('objet') ;
 var email = document.getElementById('email') ;
 var message = document.getElementById('message') ;
 var numero = document.getElementById('numero') ;
 var date = document.getElementById('date') ;
 var autres = document.getElementById('autres') ;
 var mybutton = document.getElementById('mybutton') ;
 var Caseletter = /[a-z]/g ;
 var numbers = /[0-9]/g ;
 var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

 mybutton.onclick = function() {
    if(!(nom.value.match(Caseletter))) {
        nom.style.outline = "1px solid #FF0000" ;
    }
    if(!(objet.value.match(Caseletter))) {
        objet.style.outline = "1px solid #FF0000" ;
    }
    if(!(expressionReguliere.test(email.value))) {
        email.style.outline = "1px solid #FF0000" ;
    }
    if(!(message.value.match(Caseletter) || message.value.match(numbers)  )) {
        message.style.outline = "1px solid #FF0000" ;
    }
    if(!(numero.value.match(numbers))) {
        numero.style.outline = "1px solid #FF0000" ;
    }
    if(date.value.length == 0) {
        date.style.outline = "1px solid #FF0000" ;

    }
    if(!(autres.value.match(Caseletter) || autres.value.match(numbers)  )) {
        autres.style.outline = "1px solid #FF0000" ;
    }
   
 }

 //chercher un pays
 let infos = document.querySelector(".infos") ;

var capitalDiv = document.createElement('div') ;
var flagDiv = document.createElement('div') ;
var countryDiv = document.createElement('div') ;
var continentDiv = document.createElement('div') ;

function search() {
   let textCountry = document.querySelector('.text').value ;
   countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`

   let url = "https://restcountries.com/v3.1/name/" + textCountry ;

   fetch(url)
   .then(response => 
    response.json()
    .then(data => {
        const country = data[0] ;
        const capital = country.capital ;
        const continent = country.continents ;
        const flag = country.flags.svg ;

        capitalDiv.innerHTML = `<span>capital</span><br><p>${capital}</p>` ;
        continentDiv.innerHTML = `<span>continent</span><br><p>${continent}</p>` ;
        flagDiv.innerHTML = `<span>drapeaux</span><br><img src = "${flag} " >` ;

        infos.appendChild(countryDiv) ;
        infos.appendChild(continentDiv) ;
        infos.appendChild(capitalDiv) ;
        infos.appendChild(flagDiv) ;

    }))
    
}
