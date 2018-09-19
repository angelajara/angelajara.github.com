//alert("hola mundo js");
// console.log("hola mundo js en la consola");
//dom (document object model)


let element = document.querySelector(".fa-gem");

 let elementlist = document.querySelectorAll(".fa-gem");

 elementlist.forEach(function(element){
     console.log(elementlist);
     element.addEventListener('click',function(){
         alert("diamante clickeado");
         element.classList.remove("far");
        element.classList.add("fas");
    })
});

//eventos

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="/";


        }, 500);
        

    });
})





