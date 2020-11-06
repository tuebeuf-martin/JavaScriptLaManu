function calculate(){
   var age = document.getElementById("age").value;
    
   if (age >= 18) {//"Si le test (age >=18) est verifié..."//
           if(age>=80)  {
             alert("Vous êtes très vieux ! Mortel !"); 
           }
           else {
             alert("Vous êtes majeur ! Stylé"); 
           }
   }  
   else {//"Sinon..."//
      alert("Vous êtes mineur ! Rentre chez toi");
}
}
 

    